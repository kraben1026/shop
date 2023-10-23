import { Module } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import { ItemService } from './item.service';
import { ItemRepository } from '../repositories/itemRepository';

@Module({
  imports: [TestingModule],
  providers: [ItemService, ItemRepository],
})
export class RootTestModule {}