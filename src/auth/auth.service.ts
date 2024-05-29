import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '../shared/jwt/jwt.service';
import { PrismaService } from '../shared/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async login(username: string, password: string) {
    const authUser = await this.attempt(username, password);
    if (!authUser) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return {
      token: await this.jwt.generateToken(authUser),
      user: authUser,
    };
  }

  /**
   * AUTH ATTEMPT
   * @param username
   * @param password
   */
  async attempt(username: string, password: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [
          {
            email: username,
          },
          {
            username,
          },
        ],
      },
    });

    const attempt = await bcrypt.compare(password, user?.password);
    if (user && attempt) {
      return user;
    }
  }
}
