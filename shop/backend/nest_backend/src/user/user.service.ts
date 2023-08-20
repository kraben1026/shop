import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CheckLoginDto } from 'src/dtos/checkLogin.dto';
import { User } from 'src/entities/user.entity';
import { CreateUserType } from 'src/types/createUserType';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(createUserType: CreateUserType) {
    try {
      return await this.userRepository.create(createUserType);
    } catch (error) {
      return error;
    }
  }
  async save(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async update(user: User): Promise<User> {
    return await this.update(user);
  }

  async delete(user: User): Promise<void> {
    return await this.delete(user);
  }

  async create(user: CreateUserType) {
    try {
      const entity = this.userRepository.create(user);
      return await this.userRepository.save(entity);
    } catch (error) {
      console.log(`error occured: ${error}`);
      return error;
    }
  }

  async checkLogin(checkLoginDto: CheckLoginDto): Promise<User> {
    const { username, password } = checkLoginDto;
    return await this.userRepository.findOne({
      where: { username, password },
    });
  }

  async findOne(username:string){
    return this.userRepository.findOne({where: {username: username}})
  }
}
