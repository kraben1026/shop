import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { ItemRepository } from '../repositories/itemRepository';

describe('ItemController', () => {
  let controller: ItemController;
  let itemService: ItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemController],
      providers: [ItemService, ItemRepository],
    }).compile();

    controller = module.get<ItemController>(ItemController);
    itemService = module.get<ItemService>(ItemService);
  });

  it('should sell an item', async () => {
    const itemData = {
      Name: 'Item 1',
      Price: 100,
      url: 'asd',
      user_id: 1
    };
    const result = await controller.sell(itemData);

    expect(result).toBeTruthy();
    expect(itemService.sell.length).toBe(1);
  });
});
