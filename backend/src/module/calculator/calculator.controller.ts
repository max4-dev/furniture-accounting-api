import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CalculatorService } from './calculator.service';
import {
  CalculateRawMaterialDto,
  RawMaterialResultDto,
} from './dto/calculator.dto';

@ApiTags('Calculator')
@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post('calculate-raw-material')
  @ApiOperation({
    summary: 'Расчет количества необходимого сырья',
    description:
      'Рассчитывает количество сырья для производства продукции с учетом потерь. Формула: (length × width × coefficient × quantity) × (1 + wastePercent / 100)',
  })
  @ApiResponse({
    status: 200,
    description: 'Успешный расчет',
    type: RawMaterialResultDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Ошибка валидации или несуществующие ID',
  })
  async calculateRawMaterial(
    @Body() calculateRawMaterialDto: CalculateRawMaterialDto,
  ): Promise<RawMaterialResultDto> {
    return this.calculatorService.calculateRawMaterial(calculateRawMaterialDto);
  }
}
