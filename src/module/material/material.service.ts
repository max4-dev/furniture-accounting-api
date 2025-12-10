import { PrismaService } from '@common/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';

@Injectable()
export class MaterialService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMaterialDto: CreateMaterialDto) {
    return this.prisma.material.create({
      data: createMaterialDto,
      include: {
        products: true,
      },
    });
  }

  findAll() {
    return this.prisma.material.findMany({
      include: {
        products: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.material.findUnique({
      where: { id },
      include: {
        products: true,
      },
    });
  }

  update(id: number, updateMaterialDto: UpdateMaterialDto) {
    return this.prisma.material.update({
      where: { id },
      data: updateMaterialDto,
      include: {
        products: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.material.delete({
      where: { id },
    });
  }
}
