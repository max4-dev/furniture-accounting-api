import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductWorkshopService } from './product-workshop.service';
import { CreateProductWorkshopDto } from './dto/create-product-workshop.dto';
import { UpdateProductWorkshopDto } from './dto/update-product-workshop.dto';

@Controller('product-workshops')
export class ProductWorkshopController {
  constructor(
    private readonly productWorkshopService: ProductWorkshopService,
  ) {}

  @Post()
  create(@Body() createProductWorkshopDto: CreateProductWorkshopDto) {
    return this.productWorkshopService.create(createProductWorkshopDto);
  }

  @Get()
  findAll() {
    return this.productWorkshopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productWorkshopService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductWorkshopDto: UpdateProductWorkshopDto,
  ) {
    return this.productWorkshopService.update(+id, updateProductWorkshopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productWorkshopService.remove(+id);
  }
}
