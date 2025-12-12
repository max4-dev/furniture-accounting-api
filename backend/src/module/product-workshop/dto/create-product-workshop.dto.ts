import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductWorkshopDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  productionTime: number;

  @IsNumber()
  @IsNotEmpty()
  workshopId: number;
}
