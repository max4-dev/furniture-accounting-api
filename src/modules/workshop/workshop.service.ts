import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorkshopDto } from './dto/create-workshop.dto';
import { UpdateWorkshopDto } from './dto/update-workshop.dto';

@Injectable()
export class WorkshopService {
  constructor(private readonly prisma: PrismaService) {}

  create(createWorkshopDto: CreateWorkshopDto) {
    return this.prisma.workshop.create({
      data: createWorkshopDto,
    });
  }

  findAll() {
    return this.prisma.workshop.findMany({
      orderBy: {
        id: 'desc', // Сортировка по убыванию ID
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} workshop`;
  }

  update(id: number, updateWorkshopDto: UpdateWorkshopDto) {
    return `This action updates a #${id} workshop`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshop`;
  }
}
