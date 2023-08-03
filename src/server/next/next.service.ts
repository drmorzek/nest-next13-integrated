import { Injectable } from '@nestjs/common';
import { NextServer } from 'next/dist/server/next';
import Next from 'next/dist/server/next';

@Injectable()
export class NextService {
  private server: NextServer;

  constructor() {
    this.server = Next({ dev: process.env.NODE_ENV !== 'production' });
  }
  public nextServer() {
    return this.server;
  }
  public async prepare() {
    await this.server.prepare();
  }
}


