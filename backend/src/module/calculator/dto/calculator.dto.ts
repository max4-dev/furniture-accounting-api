import { IsNumber, Min, IsPositive } from 'class-validator';

export class CalculateRawMaterialDto {
  @IsNumber()
  @IsPositive()
  productTypeId: number;

  @IsNumber()
  @IsPositive()
  materialId: number;

  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsNumber()
  @Min(0)
  length: number;

  @IsNumber()
  @Min(0)
  width: number;
}

export class RawMaterialResultDto {
  requiredRawMaterial: number;
  originalAmount: number;
  wastePercent: number;
  finalAmount: number;
}
