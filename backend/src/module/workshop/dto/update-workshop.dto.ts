import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateWorkshopDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsNumber()
  numberWorkers?: number;
}
