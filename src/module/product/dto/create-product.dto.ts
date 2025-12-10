import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  article: string;

  @IsNumber()
  @IsNotEmpty()
  minimumCost: number;

  @IsNumber()
  @IsNotEmpty()
  typeId: number;

  @IsNumber()
  @IsNotEmpty()
  materialId: number;
}
