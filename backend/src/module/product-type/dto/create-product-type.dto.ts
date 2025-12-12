import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  coefficient: number;
}
