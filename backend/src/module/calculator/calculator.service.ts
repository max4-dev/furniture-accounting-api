import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@common/database/prisma.service';
import {
  CalculateRawMaterialDto,
  RawMaterialResultDto,
} from './dto/calculator.dto';

@Injectable()
export class CalculatorService {
  constructor(private readonly prisma: PrismaService) {}

  async calculateRawMaterial(
    calculateRawMaterialDto: CalculateRawMaterialDto,
  ): Promise<RawMaterialResultDto> {
    const { productTypeId, materialId, quantity, length, width } =
      calculateRawMaterialDto;

    if (quantity <= 0) {
      throw new BadRequestException(
        'Количество продукции должно быть положительным числом',
      );
    }

    if (length < 0 || width < 0) {
      throw new BadRequestException(
        'Параметры длины и ширины не могут быть отрицательными',
      );
    }

    const productType = await this.prisma.productType.findUnique({
      where: { id: productTypeId },
    });

    if (!productType) {
      throw new BadRequestException(
        `Тип продукции с ID ${productTypeId} не найден`,
      );
    }

    const material = await this.prisma.material.findUnique({
      where: { id: materialId },
    });

    if (!material) {
      throw new BadRequestException(`Материал с ID ${materialId} не найден`);
    }

    const rawMaterialPerUnit = length * width * productType.coefficient;
    const baseAmount = rawMaterialPerUnit * quantity;
    const wastePercent = material.missingPercent;
    const wasteMultiplier = 1 + wastePercent / 100;
    const finalAmount = baseAmount * wasteMultiplier;
    const requiredRawMaterial = Math.ceil(finalAmount);

    return {
      requiredRawMaterial,
      originalAmount: Math.ceil(baseAmount),
      wastePercent,
      finalAmount: Math.round(finalAmount * 100) / 100,
    };
  }
}
