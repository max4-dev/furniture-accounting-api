import { PrismaService } from '@common/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateWorkshopDto } from './dto/create-workshop.dto';
import { UpdateWorkshopDto } from './dto/update-workshop.dto';

@Injectable()
export class WorkshopService {
  constructor(private readonly prisma: PrismaService) {}

  create(createWorkshopDto: CreateWorkshopDto) {
    return this.prisma.workshop.create({
      data: createWorkshopDto,
      include: {
        productWorkshop: true,
      },
    });
  }

  findAll() {
    return this.prisma.workshop.findMany({
      include: {
        productWorkshop: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.workshop.findUnique({
      where: { id },
      include: {
        productWorkshop: true,
      },
    });
  }

  update(id: number, updateWorkshopDto: UpdateWorkshopDto) {
    return this.prisma.workshop.update({
      where: { id },
      data: updateWorkshopDto,
      include: {
        productWorkshop: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.workshop.delete({
      where: { id },
    });
  }
}
