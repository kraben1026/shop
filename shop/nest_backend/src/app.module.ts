import { BadRequestException, Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemService } from './item/item.service';
import { LoginService } from './login/login.service';
import { UserService } from './user/user.service';
import { ItemController } from './item/item.controller';
import { LoginController } from './login/login.controller';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { User } from './entities/user.entity';
import { AuthorizationService } from './middlewares/authorization';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'Auth/auth.guard';

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
    TypeOrmModule.forFeature([Item, User]),
  ],
  controllers: [AppController, ItemController, LoginController, UserController],
  providers: [AppService, ItemService, LoginService, UserService, AuthorizationService, ConfigService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
})
export class AppModule {}
