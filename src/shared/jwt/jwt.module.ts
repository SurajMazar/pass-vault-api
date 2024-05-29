import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtModule as JwtMod } from '@nestjs/jwt';
import { env } from '../utils/helper';

@Module({
  imports: [
    JwtMod.register({
      secret: env('JWT_SECRET_KEY'),
      signOptions: { expiresIn: env('JWT_TOKEN_EXPIRY') }, // Token expiration time
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
