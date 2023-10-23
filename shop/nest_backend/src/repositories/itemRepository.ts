import { EntityRepository, Repository } from "typeorm";
import { Item } from "../entities/item.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { SellItemDto } from "src/dtos/sellItem.dto";


@Injectable()
export class ItemRepository{
  constructor(
    @InjectRepository(Item) // Use 'Item' entity instead of 'User'
    private itemEntityRepository: Repository<Item>
  ) {}

  /*public async findOne(id: number): Promise<Item> {
    return await this.itemEntityRepository.findOne(id);
  }*/


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

  public async findByUserId(user_id){
    return await this.itemEntityRepository.find({ where: { user_id: user_id } })
  }
  getHello(){
    return 'hello'
  }
}