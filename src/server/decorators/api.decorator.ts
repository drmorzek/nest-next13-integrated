import { Controller } from '@nestjs/common';

export function ApiController(path: string) {
  return Controller(`api/${path}`);
}
