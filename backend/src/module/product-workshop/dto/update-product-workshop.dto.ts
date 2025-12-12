import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductWorkshopDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  productionTime?: number;

  @IsOptional()
  @IsNumber()
  workshopId?: number;
}
