import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkshopModule } from './modules/workshop/workshop.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [WorkshopModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
