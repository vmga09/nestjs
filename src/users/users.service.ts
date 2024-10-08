import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, username: 'john', password: 'changeme' },
        { id: 2, username: 'chris', password: 'secret' },
        { id: 3, username: 'maria', password: 'guess' },
        { id: 4, username: 'admin', password: 'admin' },
        
    ]

    getAllUsers() {
        return this.users
    }
}
