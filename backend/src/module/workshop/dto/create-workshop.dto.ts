import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateWorkshopDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsOptional()
  @IsNumber()
  numberWorkers?: number;
}
