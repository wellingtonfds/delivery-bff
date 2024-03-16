import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super(
            {
                // get JWT from Header 
                // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

                // get JWT from cookie
                jwtFromRequest: ExtractJwt.fromExtractors([
                    (request: Request) => (
                        request.cookies.jwt
                    )
                ]),
                ignoreExpiration: false,
                secretOrKey: jwtConstants.secret, // REQUIRED
            }
        );
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}