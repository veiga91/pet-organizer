import { Injectable, UnauthorizedException, BadRequestException, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt'
import { hashedPasswordContants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
    ) {}

  async signIn(email: string, password: string): Promise<{access_token: string}> {
    const user = await this.usersService.findOne({ email: email });

    const match = await bcrypt.compare(password, user.hashedPassword);
    
    if (!match) {
      throw new UnauthorizedException();
    }
    
    const { email: dbUserEmail, id  } = user;
    const payload = { email: dbUserEmail, sub: id };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(email: string, password: string, name: string, role: string):  Promise<{access_token: string}> {
    const hashedPassword = await bcrypt.hash(password, hashedPasswordContants.saltRounds);
    const newUser = await this.usersService.createUser({ email, hashedPassword, name, role });

    return {
      access_token: await this.jwtService.signAsync({ email: newUser.email, sub: newUser.id }),
    };
    
  }
}
