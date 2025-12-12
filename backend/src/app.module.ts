import { DatabaseModule } from '@common/database';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateConfig } from './common/utils';
import { MaterialModule } from './module/material/material.module';
import { ProductTypeModule } from './module/product-type/product-type.module';
import { ProductWorkshopModule } from './module/product-workshop/product-workshop.module';
import { ProductModule } from './module/product/product.module';
import { WorkshopModule } from './module/workshop/workshop.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => validateConfig(config),
    }),
    DatabaseModule,
    ProductModule,
    ProductTypeModule,
    MaterialModule,
    ProductWorkshopModule,
    WorkshopModule,
  ],
})
export class AppModule {}
