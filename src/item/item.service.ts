import { Inject, Injectable } from '@nestjs/common';
import { ItemData } from '../interfaces/itemData';
import { ItemRepository } from 'src/repositories/itemRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/entities/item.entity';
import { SellItemDto } from 'src/dtos/sellItem.dto';

@Injectable()
export class ItemService {
    /*async sell(itemData, userId) {
    const response = await sell.sell(itemData, userId);
    return response;
  },*/
  constructor(
    @InjectRepository(Item)
    private itemRepository: ItemRepository
  ) {}

  async sell(itemData: SellItemDto, user_id: number) {
    try {
      const newItem = new Item();
      newItem.Name = itemData.Name;
      newItem.Price = itemData.Price;
      newItem.url = itemData.url;
      newItem.user_id = user_id;
      await this.itemRepository.save(newItem);
      return newItem;  
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async buy(id){
      return await this.itemRepository.delete(id);
  }

  async getItems(){
      return this.itemRepository.find();
  }
}
