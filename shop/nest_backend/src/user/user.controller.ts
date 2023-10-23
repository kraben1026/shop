import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserType } from 'src/types/createUserType';
import { ItemService } from 'src/item/item.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService, private itemService: ItemService) {}

    @Get('getUser')
    async getUser() {
        console.log('xd')
    }

    @Post('createUser')
    async createUser(@Body() createUserType: CreateUserType){
        try {
            return await this.userService.createUser(createUserType)
        } catch (error) {
            console.log(error)
        }
    }

    @Post('myItems')
    async myItems(@Body() user_id: number){
        try {
            console.log(user_id)
            return await this.itemService.getItemsByUserId(user_id);
        } catch (error) {
           console.log(error) 
        }
    }
}
