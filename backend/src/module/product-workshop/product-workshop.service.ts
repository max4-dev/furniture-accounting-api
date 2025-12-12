import { PrismaService } from '@common/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductWorkshopDto } from './dto/create-product-workshop.dto';
import { UpdateProductWorkshopDto } from './dto/update-product-workshop.dto';

@Injectable()
export class ProductWorkshopService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProductWorkshopDto: CreateProductWorkshopDto) {
    return this.prisma.productWorkshop.create({
      data: createProductWorkshopDto,
      include: {
        workshop: true,
      },
    });
  }

  findAll() {
    return this.prisma.productWorkshop.findMany({
      include: {
        workshop: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.productWorkshop.findUnique({
      where: { id },
      include: {
        workshop: true,
      },
    });
  }

  update(id: number, updateProductWorkshopDto: UpdateProductWorkshopDto) {
    return this.prisma.productWorkshop.update({
      where: { id },
      data: updateProductWorkshopDto,
      include: {
        workshop: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.productWorkshop.delete({
      where: { id },
    });
  }
}
