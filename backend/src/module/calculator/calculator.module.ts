import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';
import { PrismaService } from '@common/database/prisma.service';

@Module({
  controllers: [CalculatorController],
  providers: [CalculatorService, PrismaService],
  exports: [CalculatorService],
})
export class CalculatorModule {}
