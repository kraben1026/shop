import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/userRepository';
import { CreateUserType } from 'src/types/createUserType';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository){}

    async createUser(createUserType: CreateUserType){
        try {
            return await this.userRepository.create(createUserType)
        } catch (error) {
            return error
        }
    }
}
