import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '../shared/jwt/jwt.module';
import { PrismaModule } from '../shared/prisma/prisma.module';

@Module({
  imports: [JwtModule, PrismaModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
