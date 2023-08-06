import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserType } from 'src/types/createUserType';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

    @Get('getUser')
    async getUser() {}

    @Post('createUser')
    async createUser(@Body() createUserType: CreateUserType){
        try {
            return await this.userService.createUser(createUserType)

        } catch (error) {
            console.log(error)
        }
    }

    @Get('myItems')
    async myItems(){}
}
