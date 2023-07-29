/* eslint-disable prettier/prettier */
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private userEntityRepository: Repository<User>
    ){}
    public async findOne(id: number): Promise<User> {
        return await this.userEntityRepository.findOneBy({ id });
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
}
