import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { NextService } from './next.service';

@Controller()
export class NextController {
  constructor(private readonly nextService: NextService) {}
  @Get('*')
  public async catchAll(@Req() req: Request, @Res() res: Response) {
    const server = this.nextService.nextServer();
    const handle = server.getRequestHandler();
    handle(req, res);
  }
}
