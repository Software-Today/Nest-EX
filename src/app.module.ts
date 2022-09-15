import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats/cats.controller';

import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [UsersModule, CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
