import { DatabaseModule } from '@common/database';
import { Module } from '@nestjs/common';
import { ProductWorkshopController } from './product-workshop.controller';
import { ProductWorkshopService } from './product-workshop.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductWorkshopController],
  providers: [ProductWorkshopService],
})
export class ProductWorkshopModule {}
