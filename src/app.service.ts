import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(){
    return {
      "id":80,
      "name":"edu"
    };
  }
}
