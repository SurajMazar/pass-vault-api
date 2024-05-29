import { Injectable } from '@nestjs/common';
import { JwtService as jwtService } from '@nestjs/jwt';

@Injectable()
export class JwtService {
  constructor(private readonly jwt: jwtService) {}

  /**
   * GENERATE JWT TOKEN
   * @param payload
   */
  async generateToken(payload: any): Promise<string> {
    return this.jwt.sign(payload);
  }

  /**
   * VERIFY JWT TOKEN
   * @param token
   */
  async verifyToken(token: string): Promise<any> {
    return this.jwt.verify(token);
  }
}
