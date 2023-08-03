import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NextController } from './next/next.controller';
import { NextService } from './next/next.service';

@Module({
  imports: [],
  controllers: [AppController, NextController],
  providers: [AppService, NextService],
})
export class AppModule {}
