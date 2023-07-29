/* eslint-disable prettier/prettier */
import { Repository } from "typeorm";
import { Item } from "../entities/item.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";


@Injectable()
export class ItemRepository {
  constructor(
    @InjectRepository(Item) // Use 'Item' entity instead of 'User'
    private itemEntityRepository: Repository<Item>
  ) {}

  /*public async findOne(id: number): Promise<Item> {
    return await this.itemEntityRepository.findOne(id);
  }*/

  public async find(criteria: { [key: string]: any }): Promise<Item[]> {
    return await this.itemEntityRepository.find(criteria);
  }

  public async save(item: Item): Promise<Item> {
    return await this.itemEntityRepository.save(item);
  }

  /*public async update(item: Item): Promise<Item> {
    return await this.itemEntityRepository.update(item.id, item);
  }*/

  public async delete(item: Item): Promise<void> {
    await this.itemEntityRepository.delete(item.id);
  }
}