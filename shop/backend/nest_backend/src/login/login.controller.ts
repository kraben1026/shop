import { Body, Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service';
import { CheckLoginDto } from 'src/dtos/checkLogin.dto';

@Controller('login')
export class LoginController {
  constructor(
    private loginService: LoginService
  ) {}

  @Get()
  async loginUser(@Body() checkLoginDto: CheckLoginDto) {
    return await this.loginService.login(checkLoginDto);
  }
}
