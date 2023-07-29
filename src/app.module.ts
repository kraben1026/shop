/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemService } from './item/item.service';
import { LoginService } from './login/login.service';
import { UserService } from './user/user.service';
import { ItemController } from './item/item.controller';
import { LoginController } from './login/login.controller';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRepository } from './repositories/itemRepository';
import { Item } from './entities/item.entity';
import { User } from './entities/user.entity';
import { AuthorizationService } from './middlewares/authorization';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'shop',
      entities: [Item, User], // Add the entities here
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ItemRepository, Item, User]),
  ],
  controllers: [AppController, ItemController, LoginController, UserController],
  providers: [AppService, ItemService, LoginService, UserService, ItemRepository, AuthorizationService, ConfigService],
})
export class AppModule {}
