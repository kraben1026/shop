import { Controller, Post, Body, HttpCode, HttpStatus, Headers, Get, Res } from '@nestjs/common';
import { AuthorizationService } from 'src/middlewares/authorization';
import { ItemService } from './item.service';
import { SellItemDto } from '../dtos/sellItem.dto';

@Controller('item')
export class ItemController {
  constructor(
    private itemService: ItemService,
  ){}
  
  @Post('sell')
  @HttpCode(HttpStatus.OK)
  async sell(@Body() itemData: SellItemDto,/* @Headers('authorization') authorizationValue: string */) {
      return await this.itemService.sell(itemData)
  }

  @Post('buy')
  @HttpCode(HttpStatus.OK)
  async buy(@Body() id: number){
      return await this.itemService.buy(id);
  }

  @Post('myItems')
  async myItems(@Body() user_id: number) {
    try {
      return await this.itemService.getItemsByUserId(user_id);
    } catch (error) {
      console.log(error);
      return null
    }
  }
  
}
