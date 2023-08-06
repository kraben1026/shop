import { Injectable } from '@nestjs/common';
import { CheckLoginDto } from 'src/dtos/checkLogin.dto';
import { UserRepository } from 'src/repositories/userRepository';

@Injectable()
export class LoginService {
  constructor(
    private userRepository: UserRepository
  ) {}

  async login(checkLoginDto: CheckLoginDto){
    return await this.userRepository.checkLogin(checkLoginDto)
  }
}
