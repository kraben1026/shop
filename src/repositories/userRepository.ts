import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CheckLoginDto } from "src/dtos/checkLogin.dto";
import { CreateUserType } from "src/types/createUserType";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private userEntityRepository: Repository<User>
    ){}
    public async checkLogin(checkLoginDto: CheckLoginDto): Promise<User> {
        const { username, password } = checkLoginDto;
        return await this.userEntityRepository.findOne({ where: { username, password } });
      }
    
      public async findAll(): Promise<User[]> {
        return await this.userEntityRepository.find();
      }
    
      public async save(user: User): Promise<User> {
        return await this.userEntityRepository.save(user);
      }

      public async update(user: User): Promise<User> {
        return await this.update(user);
      }
    
      public async delete(user: User): Promise<void> {
        return await this.delete(user);
      }

      public async create(user: CreateUserType){
        try {
          const entity = this.userEntityRepository.create(user)
          return await this.userEntityRepository.save(entity)
        } catch (error) {
          console.log(`error occured: ${error}`);
          return error
        }
      }

}
