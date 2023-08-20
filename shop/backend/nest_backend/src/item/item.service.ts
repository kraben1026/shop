import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/entities/item.entity';
import { SellItemDto } from 'src/dtos/sellItem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
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
      console.log(error);
      return error;
    }
  }

  async buy(id) {
    return await this.itemRepository.delete(id);
  }

  async getItems() {
    return this.itemRepository.find();
  }

  async getItemsByUserId(user_id: number) {
    try {
      const response = await this.itemRepository.findOne({
        where: { user_id: user_id },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error; // Rethrow the error to be caught by the controller
    }
  }
  public async findOne(user_id): Promise<Item> {
    return await this.itemRepository.findOne({ where: { user_id: user_id } });
  }

  public async find(): Promise<Item[]> {
    try {
      return await this.itemRepository.find();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  public async save(item: Item): Promise<Item> {
    try {
      return await this.itemRepository.save(item);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
