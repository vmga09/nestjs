import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    @UseGuards(AuthGuard)
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Post()
    @UseGuards(AuthGuard)
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }
}
