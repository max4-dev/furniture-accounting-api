import { Get, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  // @Get()
  // async getHello(): Promise<any[]> {
  //   return ['Hello'];
  // }
}
