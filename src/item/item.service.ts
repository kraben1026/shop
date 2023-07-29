/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { ItemData } from '../interfaces/itemData';
import { ItemRepository } from 'src/repositories/itemRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/entities/item.entity';

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

  async sell(itemData: ItemData, user_id: number) {
    const newItem = new Item();
    newItem.Name = itemData.Name;
    newItem.Price = itemData.Price;
    newItem.url = itemData.url;
    newItem.user_id = user_id;
    await this.itemRepository.save(newItem);
    return newItem;
  }

  async buy(item: Item){
    return await this.itemRepository.delete(item)
  }
}
