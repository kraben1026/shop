import { EntityRepository, Repository } from "typeorm";
import { Item } from "../entities/item.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { SellItemDto } from "src/dtos/sellItem.dto";


@Injectable()
export class ItemRepository {
  constructor(
    @InjectRepository(Item) // Use 'Item' entity instead of 'User'
    private itemEntityRepository: Repository<Item>
  ) {}

  /*public async findOne(id: number): Promise<Item> {
    return await this.itemEntityRepository.findOne(id);
  }*/

  public async find(): Promise<Item[]> {
    try {
      return await this.itemEntityRepository.find();
    } catch (error) {
      console.log(error)
      return error
    }
  }

  public async save(item: Item): Promise<Item> {
    try {
      return await this.itemEntityRepository.save(item);
    } catch (error) {
      console.log(error)
      return error
    }
  }

  /*public async update(item: Item): Promise<Item> {
    return await this.itemEntityRepository.update(item.id, item);
  }*/

  public async delete(id: number): Promise<void> {
    try {
      await this.itemEntityRepository.delete(id);
    } catch (error) {
      console.log(error)
      return error
    }
  }


}