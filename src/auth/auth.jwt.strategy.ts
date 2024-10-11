import { Injectable, UnauthorizedException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly prismaService: PrismaService ) {
        super({

            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        });

    
    }

    async validate(payload:{id:string}) {

        const user = await this.prismaService.user.findUnique({
            where: {
                id: payload.id
            }
        })

        if (!user) {
            throw new UnauthorizedException('Usuario no encontrado o token inválido');
          }
        // if (!user) {
        //     throw new NotFoundException('User not found');
        // }
        return user
    }
   
}


