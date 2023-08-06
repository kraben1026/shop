import { Controller, Inject, Post, Body, HttpCode, HttpStatus, Headers, Get } from '@nestjs/common';
import { AuthorizationService } from 'src/middlewares/authorization';
import { ItemData } from '../interfaces/itemData';
import { Repository } from 'typeorm';
import { ItemService } from './item.service';
import { Item } from 'src/entities/item.entity';
import { SellItemDto } from 'src/dtos/sellItem.dto';

@Controller('item')
export class ItemController {
  constructor(
    private itemService: ItemService,
    private authService: AuthorizationService
  ){}
  
  @Post('sell')
  @HttpCode(HttpStatus.OK)
  async sell(@Body() itemData: SellItemDto,/* @Headers('authorization') authorizationValue: string */) {
      const user_id = 1 //this.authService.authorize(authorizationValue).userId;
      return await this.itemService.sell(itemData, user_id)
  }

  @Post('buy')
  @HttpCode(HttpStatus.OK)
  async buy(@Body() id: number){
      return await this.itemService.buy(id);
  }

  @Get('get-items')
  @HttpCode(HttpStatus.OK)
  async getItems(){
      return await this.itemService.getItems();
  }
}
