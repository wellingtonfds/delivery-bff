import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(username)
        const passwordHasMatch = await compare(pass, user.password)
        if (passwordHasMatch) {
            const { password, id, createdAt, updatedAt, companyId, ...result } = user
            return result;
        }
        return null;
    }

    async login(username: string, pass: string) {
        const user = await this.validateUser(username, pass)
        console.log(user)
        if (!user) {
            return null
        }
        return {
            access_token: this.jwtService.sign(user),
        };
    }
}