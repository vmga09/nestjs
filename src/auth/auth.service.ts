import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  async login(authDto: AuthDto): Promise<any> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: authDto.email,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const validatePassword = await bcrypt.compare(
      authDto.password,
      user.password,
    );

    if (!validatePassword) {
      throw new NotFoundException('Invalid user or password');
    }
    const token = this.jwtService.sign({
      id: user.id,
    });

    return {
      token: token,
    };
  }

  async register(createUserDto: CreateUserDto): Promise<any> {
    const usuario = new User();
    usuario.name = createUserDto.name;
    usuario.email = createUserDto.email;
    usuario.password = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.userService.createUser(usuario);

    return {
      user: user,
    };
  }
}
