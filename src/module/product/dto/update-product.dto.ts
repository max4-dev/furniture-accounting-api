import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  article?: string;

  @IsOptional()
  @IsNumber()
  minimumCost?: number;

  @IsOptional()
  @IsNumber()
  typeId?: number;

  @IsOptional()
  @IsNumber()
  materialId?: number;
}
