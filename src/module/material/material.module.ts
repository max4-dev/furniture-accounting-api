import { DatabaseModule } from '@common/database';
import { Module } from '@nestjs/common';
import { MaterialController } from './material.controller';
import { MaterialService } from './material.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MaterialController],
  providers: [MaterialService],
})
export class MaterialModule {}
