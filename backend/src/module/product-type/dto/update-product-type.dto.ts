import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductTypeDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  coefficient?: number;
}
