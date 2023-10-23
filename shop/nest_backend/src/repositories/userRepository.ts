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
 
    
      
    
     
}
