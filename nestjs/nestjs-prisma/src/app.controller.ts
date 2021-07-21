import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}


  @Get('products')
  findPublishedProducts(){
    return this.prisma.product.findMany({where: { published: false}})
  }
}
