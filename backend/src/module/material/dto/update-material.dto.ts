import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateMaterialDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  missingPercent?: number;
}
