import { Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiController } from './decorators/api.decorator';

@ApiController('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
