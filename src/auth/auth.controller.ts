import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { create } from 'domain';



@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Req() request:Request,@Res() response:Response, @Body() authDto: AuthDto): Promise<any> {
        try {
            console.log(authDto.email);
            const token = await this.authService.login(authDto);
            return response.status(200).json({
                status: "ok",
                message: "Login successfully",
                token
            });
            
        } catch (error) {
            return response.status(500).json({
                status: "no ok",
                message: "Unauthorized",
            });
            
        }
}

@Post('register')
    async register(@Req() request:Request,@Res() response:Response, @Body() createUserDto: CreateUserDto): Promise<any> {
        try {
            const result = await this.authService.register(createUserDto);
            return response.status(200).json({
                status: "ok",
                message: "user created successfully"
            });
            
        } catch (error) {
            return response.status(500).json({
                status: "no ok",
                message: "Unauthorized",
            });
            
        }
}

}