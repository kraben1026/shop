/* eslint-disable prettier/prettier */
import { Controller, Inject, Post, Body, HttpCode, HttpStatus, Headers } from '@nestjs/common';
import { AuthorizationService } from 'src/middlewares/authorization';
import { ItemData } from '../interfaces/itemData';
import { Repository } from 'typeorm';
import { ItemService } from './item.service';
import { Item } from 'src/entities/item.entity';

@Controller('item')
export class ItemController {
  constructor(
    private itemService: ItemService,
    private authService: AuthorizationService
  ){}
  
  @Post('sell')
  @HttpCode(HttpStatus.OK)
  async sell(@Body() itemData: ItemData,/* @Headers('authorization') authorizationValue: string */) {
    //console.log(authorizationValue)
    try {
      const user_id = 1 //this.authService.authorize(authorizationValue).userId;
      return await this.itemService.sell(itemData, user_id)
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Post('buy')
  @HttpCode(HttpStatus.OK)
  async buy(@Body() item: Item){
    try {
      await this.itemService.buy(item);
      return 'ok'
    } catch (error) {
      throw new Error(error)
    }
  }
}
