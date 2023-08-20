import {   
    Body,
    Controller,
    Get,
    Post,
    Request,
    UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto } from 'src/dtos/signIn.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('login')
    signIn(@Body() signInDto: signInDto) {
        return this.authService.signIn(signInDto.username, signInDto.password);
      }

      @UseGuards(AuthGuard)
      @Get('profile')
      getProfile(@Request() req) {
        return req.user;
      }
}
