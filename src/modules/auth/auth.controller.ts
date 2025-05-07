import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto.email, dto.password);
  }

  @Post('sign-in')
  signin(@Body() dto: SigninDto) {
    return this.authService.signin(dto.email, dto.password);
  }
}
