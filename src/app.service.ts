import { Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/devconfig.service';

@Injectable()
export class AppService {
  constructor(private devConfigService: DevConfigService){}
  getHello(): string {
    return `The db host is ${this.devConfigService.getHost()}`;
  }
}
