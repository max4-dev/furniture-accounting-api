import { PrismaService } from '@common/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { UpdateProductTypeDto } from './dto/update-product-type.dto';

@Injectable()
export class ProductTypeService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProductTypeDto: CreateProductTypeDto) {
    return this.prisma.productType.create({
      data: createProductTypeDto,
      include: {
        products: true,
      },
    });
  }

  findAll() {
    return this.prisma.productType.findMany({
      include: {
        products: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.productType.findUnique({
      where: { id },
      include: {
        products: true,
      },
    });
  }

  update(id: number, updateProductTypeDto: UpdateProductTypeDto) {
    return this.prisma.productType.update({
      where: { id },
      data: updateProductTypeDto,
      include: {
        products: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.productType.delete({
      where: { id },
    });
  }
}
