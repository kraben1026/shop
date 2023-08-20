import { Injectable } from '@nestjs/common';
import { CheckLoginDto } from 'src/dtos/checkLogin.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LoginService {
  constructor(
    private userRepository: UserService
  ) {}

  async login(checkLoginDto: CheckLoginDto){
    return await this.userRepository.checkLogin(checkLoginDto)
  }
}
