// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Начало заполнения базы данных...');

  // ============= WORKSHOPS (Цехи) =============
  console.log('📦 Создание цехов...');

  const workshops = [
    {
      name: 'Проектный',
      type: 'Проектирование',
      numberWorkers: 4,
    },
    {
      name: 'Расчетный',
      type: 'Проектирование',
      numberWorkers: 5,
    },
    {
      name: 'Раскроя',
      type: 'Обработка',
      numberWorkers: 5,
    },
    {
      name: 'Обработки',
      type: 'Обработка',
      numberWorkers: 6,
    },
    {
      name: 'Сушильный',
      type: 'Сушка',
      numberWorkers: 3,
    },
    {
      name: 'Покраски',
      type: 'Обработка',
      numberWorkers: 5,
    },
    {
      name: 'Столярный',
      type: 'Обработка',
      numberWorkers: 7,
    },
    {
      name: 'Изготовления изделий из искусственного камня и композитных материалов',
      type: 'Обработка',
      numberWorkers: 3,
    },
    {
      name: 'Изготовления мягкой мебели',
      type: 'Обработка',
      numberWorkers: 5,
    },
    {
      name: 'Монтажа стеклянных, зеркальных вставок и других изделий',
      type: 'Сборка',
      numberWorkers: 2,
    },
    {
      name: 'Сборки',
      type: 'Сборка',
      numberWorkers: 6,
    },
    {
      name: 'Упаковки',
      type: 'Сборка',
      numberWorkers: 4,
    },
  ];

  const createdWorkshops: Record<string, any> = {};
  for (const workshop of workshops) {
    const created = await prisma.workshop.create({
      data: workshop,
    });
    createdWorkshops[workshop.name] = created;
    console.log(
      `  ✓ Цех "${workshop.name}" создан (тип: ${workshop.type}, работников: ${workshop.numberWorkers})`,
    );
  }

  // ============= PRODUCT TYPES (Типы продукции) =============
  console.log('\n📋 Создание типов продукции...');

  const productTypes = [
    {
      name: 'Гостиные',
      coefficient: 3.5,
    },
    {
      name: 'Прихожие',
      coefficient: 5.6,
    },
    {
      name: 'Мягкая мебель',
      coefficient: 3,
    },
    {
      name: 'Кровати',
      coefficient: 4.7,
    },
    {
      name: 'Шкафы',
      coefficient: 1.5,
    },
    {
      name: 'Комоды',
      coefficient: 2.3,
    },
  ];

  const createdProductTypes: Record<string, any> = {};
  for (const type of productTypes) {
    const created = await prisma.productType.create({
      data: type,
    });
    createdProductTypes[type.name] = created;
    console.log(
      `  ✓ Тип "${type.name}" создан (коэффициент: ${type.coefficient})`,
    );
  }

  // ============= MATERIALS (Материалы) =============
  console.log('\n🛠️ Создание материалов...');

  const materials = [
    {
      name: 'Мебельный щит из массива дерева',
      missingPercent: 0.008,
    },
    {
      name: 'Ламинированное ДСП',
      missingPercent: 0.007,
    },
    {
      name: 'Фанера',
      missingPercent: 0.0055,
    },
    {
      name: 'МДФ',
      missingPercent: 0.003,
    },
  ];

  const createdMaterials: Record<string, any> = {};
  for (const material of materials) {
    const created = await prisma.material.create({
      data: material,
    });
    createdMaterials[material.name] = created;
    console.log(
      `  ✓ Материал "${material.name}" создан (потери: ${material.missingPercent * 100}%)`,
    );
  }

  // ============= PRODUCTS (Продукция) =============
  console.log('\n🪑 Создание продукции...');

  const products = [
    {
      name: 'Комплект мебели для гостиной Ольха горная',
      article: '1549922',
      minimumCost: 160507,
      typeId: createdProductTypes['Гостиные'].id,
      materialId: createdMaterials['Мебельный щит из массива дерева'].id,
    },
    {
      name: 'Стенка для гостиной Вишня темная',
      article: '1018556',
      minimumCost: 216907,
      typeId: createdProductTypes['Гостиные'].id,
      materialId: createdMaterials['Мебельный щит из массива дерева'].id,
    },
    {
      name: 'Прихожая Венге Винтаж',
      article: '3028272',
      minimumCost: 24970,
      typeId: createdProductTypes['Прихожие'].id,
      materialId: createdMaterials['Ламинированное ДСП'].id,
    },
    {
      name: 'Тумба с вешалкой Дуб натуральный',
      article: '3029272',
      minimumCost: 18206,
      typeId: createdProductTypes['Прихожие'].id,
      materialId: createdMaterials['Ламинированное ДСП'].id,
    },
    {
      name: 'Прихожая-комплект Дуб темный',
      article: '3028248',
      minimumCost: 177509,
      typeId: createdProductTypes['Прихожие'].id,
      materialId: createdMaterials['Мебельный щит из массива дерева'].id,
    },
    {
      name: 'Диван-кровать угловой Книжка',
      article: '7118827',
      minimumCost: 85900,
      typeId: createdProductTypes['Мягкая мебель'].id,
      materialId: createdMaterials['Мебельный щит из массива дерева'].id,
    },
    {
      name: 'Диван модульный Телескоп',
      article: '7137981',
      minimumCost: 75900,
      typeId: createdProductTypes['Мягкая мебель'].id,
      materialId: createdMaterials['Мебельный щит из массива дерева'].id,
    },
    {
      name: 'Диван-кровать Соло',
      article: '7029787',
      minimumCost: 120345,
      typeId: createdProductTypes['Мягкая мебель'].id,
      materialId: createdMaterials['Мебельный щит из массива дерева'].id,
    },
    {
      name: 'Детский диван Выкатной',
      article: '7758953',
      minimumCost: 25990,
      typeId: createdProductTypes['Мягкая мебель'].id,
      materialId: createdMaterials['Фанера'].id,
    },
    {
      name: 'Кровать с подъемным механизмом с матрасом 1600х2000 Венге',
      article: '6026662',
      minimumCost: 69500,
      typeId: createdProductTypes['Кровати'].id,
      materialId: createdMaterials['Мебельный щит из массива дерева'].id,
    },
    {
      name: 'Кровать с матрасом 90х2000 Венге',
      article: '6159043',
      minimumCost: 55600,
      typeId: createdProductTypes['Кровати'].id,
      materialId: createdMaterials['Ламинированное ДСП'].id,
    },
    {
      name: 'Кровать универсальная Дуб натуральный',
      article: '6588376',
      minimumCost: 37900,
      typeId: createdProductTypes['Кровати'].id,
      materialId: createdMaterials['Ламинированное ДСП'].id,
    },
    {
      name: 'Кровать с ящиками Ясень белый',
      article: '6758375',
      minimumCost: 46750,
      typeId: createdProductTypes['Кровати'].id,
      materialId: createdMaterials['Фанера'].id,
    },
    {
      name: 'Шкаф-купе 3-х дверный Сосна белая',
      article: '2759324',
      minimumCost: 131560,
      typeId: createdProductTypes['Шкафы'].id,
      materialId: createdMaterials['Ламинированное ДСП'].id,
    },
    {
      name: 'Стеллаж Бук натуральный',
      article: '2118827',
      minimumCost: 38700,
      typeId: createdProductTypes['Шкафы'].id,
      materialId: createdMaterials['Мебельный щит из массива дерева'].id,
    },
    {
      name: 'Шкаф 4 дверный с ящиками Ясень серый',
      article: '2559898',
      minimumCost: 160151,
      typeId: createdProductTypes['Шкафы'].id,
      materialId: createdMaterials['Фанера'].id,
    },
    {
      name: 'Шкаф-пенал Береза белый',
      article: '2259474',
      minimumCost: 40500,
      typeId: createdProductTypes['Шкафы'].id,
      materialId: createdMaterials['Фанера'].id,
    },
    {
      name: 'Комод 6 ящиков Вишня светлая',
      article: '4115947',
      minimumCost: 61235,
      typeId: createdProductTypes['Комоды'].id,
      materialId: createdMaterials['Мебельный щит из массива дерева'].id,
    },
    {
      name: 'Комод 4 ящика Вишня светлая',
      article: '4033136',
      minimumCost: 41200,
      typeId: createdProductTypes['Комоды'].id,
      materialId: createdMaterials['Мебельный щит из массива дерева'].id,
    },
    {
      name: 'Тумба под ТВ',
      article: '4028048',
      minimumCost: 12350,
      typeId: createdProductTypes['Комоды'].id,
      materialId: createdMaterials['МДФ'].id,
    },
  ];

  const createdProducts: Record<string, any> = {};
  for (const product of products) {
    const created = await prisma.product.create({
      data: product,
    });
    createdProducts[product.name] = created;
    console.log(
      `  ✓ Продукт "${product.name}" создан (артикул: ${product.article})`,
    );
  }

  // ============= PRODUCT WORKSHOPS (Производство продукции) =============
  console.log('\n⚙️ Создание производства продукции...');

  const productWorkshops = [
    // Кровать с подъемным механизмом
    {
      name: 'Кровать с подъемным механизмом с матрасом 1600х2000 Венге - Изготовления изделий из искусственного камня и композитных материалов',
      productionTime: 2,
      workshopId:
        createdWorkshops[
          'Изготовления изделий из искусственного камня и композитных материалов'
        ].id,
    },
    {
      name: 'Кровать с подъемным механизмом с матрасом 1600х2000 Венге - Монтажа',
      productionTime: 0.5,
      workshopId:
        createdWorkshops[
          'Монтажа стеклянных, зеркальных вставок и других изделий'
        ].id,
    },
    {
      name: 'Кровать с подъемным механизмом с матрасом 1600х2000 Венге - Обработка',
      productionTime: 0.6,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Кровать с подъемным механизмом с матрасом 1600х2000 Венге - Покраска',
      productionTime: 0.4,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Кровать с подъемным механизмом с матрасом 1600х2000 Венге - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Кровать с подъемным механизмом с матрасом 1600х2000 Венге - Упаковка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Тумба под ТВ
    {
      name: 'Тумба под ТВ - Изготовления изделий',
      productionTime: 2.7,
      workshopId:
        createdWorkshops[
          'Изготовления изделий из искусственного камня и композитных материалов'
        ].id,
    },
    {
      name: 'Тумба под ТВ - Монтаж',
      productionTime: 1,
      workshopId:
        createdWorkshops[
          'Монтажа стеклянных, зеркальных вставок и других изделий'
        ].id,
    },
    {
      name: 'Тумба под ТВ - Обработка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Тумба под ТВ - Покраска',
      productionTime: 0.5,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Тумба под ТВ - Проектный',
      productionTime: 1,
      workshopId: createdWorkshops['Проектный'].id,
    },
    {
      name: 'Тумба под ТВ - Раскрой',
      productionTime: 0.6,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Тумба под ТВ - Расчетный',
      productionTime: 0.4,
      workshopId: createdWorkshops['Расчетный'].id,
    },
    {
      name: 'Тумба под ТВ - Сборка',
      productionTime: 1,
      workshopId: createdWorkshops['Сборки'].id,
    },
    {
      name: 'Тумба под ТВ - Упаковка',
      productionTime: 0.3,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Диван-кровать угловой Книжка
    {
      name: 'Диван-кровать угловой Книжка - Изготовление мягкой мебели',
      productionTime: 4.2,
      workshopId: createdWorkshops['Изготовления мягкой мебели'].id,
    },
    {
      name: 'Диван-кровать угловой Книжка - Обработка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Диван-кровать угловой Книжка - Покраска',
      productionTime: 0.5,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Диван-кровать угловой Книжка - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Диван-кровать угловой Книжка - Сборка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Сборки'].id,
    },
    {
      name: 'Диван-кровать угловой Книжка - Сушка',
      productionTime: 2,
      workshopId: createdWorkshops['Сушильный'].id,
    },
    {
      name: 'Диван-кровать угловой Книжка - Упаковка',
      productionTime: 0.3,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Диван модульный Телескоп
    {
      name: 'Диван модульный Телескоп - Изготовление мягкой мебели',
      productionTime: 4.5,
      workshopId: createdWorkshops['Изготовления мягкой мебели'].id,
    },
    {
      name: 'Диван модульный Телескоп - Обработка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Диван модульный Телескоп - Покраска',
      productionTime: 1,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Диван модульный Телескоп - Проектный',
      productionTime: 1.5,
      workshopId: createdWorkshops['Проектный'].id,
    },
    {
      name: 'Диван модульный Телескоп - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Диван модульный Телескоп - Сборка',
      productionTime: 0.3,
      workshopId: createdWorkshops['Сборки'].id,
    },
    {
      name: 'Диван модульный Телескоп - Столярный',
      productionTime: 0.5,
      workshopId: createdWorkshops['Столярный'].id,
    },
    {
      name: 'Диван модульный Телескоп - Сушка',
      productionTime: 2,
      workshopId: createdWorkshops['Сушильный'].id,
    },
    {
      name: 'Диван модульный Телескоп - Упаковка',
      productionTime: 0.2,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Диван-кровать Соло
    {
      name: 'Диван-кровать Соло - Изготовление мягкой мебели',
      productionTime: 4.7,
      workshopId: createdWorkshops['Изготовления мягкой мебели'].id,
    },
    {
      name: 'Диван-кровать Соло - Обработка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Диван-кровать Соло - Покраска',
      productionTime: 0.5,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Диван-кровать Соло - Проектный',
      productionTime: 0.5,
      workshopId: createdWorkshops['Проектный'].id,
    },
    {
      name: 'Диван-кровать Соло - Раскрой',
      productionTime: 0.5,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Диван-кровать Соло - Расчетный',
      productionTime: 0.5,
      workshopId: createdWorkshops['Расчетный'].id,
    },
    {
      name: 'Диван-кровать Соло - Столярный',
      productionTime: 0.5,
      workshopId: createdWorkshops['Столярный'].id,
    },
    {
      name: 'Диван-кровать Соло - Упаковка',
      productionTime: 0.3,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Детский диван Выкатной
    {
      name: 'Детский диван Выкатной - Изготовление мягкой мебели',
      productionTime: 4,
      workshopId: createdWorkshops['Изготовления мягкой мебели'].id,
    },
    {
      name: 'Детский диван Выкатной - Обработка',
      productionTime: 0.3,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Детский диван Выкатной - Покраска',
      productionTime: 0.5,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Детский диван Выкатной - Раскрой',
      productionTime: 0.7,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Детский диван Выкатной - Столярный',
      productionTime: 1,
      workshopId: createdWorkshops['Столярный'].id,
    },
    {
      name: 'Детский диван Выкатной - Сушка',
      productionTime: 2,
      workshopId: createdWorkshops['Сушильный'].id,
    },
    {
      name: 'Детский диван Выкатной - Упаковка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Кровать с матрасом 90х2000 Венге
    {
      name: 'Кровать с матрасом 90х2000 Венге - Изготовление мягкой мебели',
      productionTime: 5.5,
      workshopId: createdWorkshops['Изготовления мягкой мебели'].id,
    },
    {
      name: 'Кровать с матрасом 90х2000 Венге - Обработка',
      productionTime: 1,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Кровать с матрасом 90х2000 Венге - Покраска',
      productionTime: 1.5,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Кровать с матрасом 90х2000 Венге - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Кровать с матрасом 90х2000 Венге - Упаковка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Комплект мебели для гостиной Ольха горная
    {
      name: 'Комплект мебели для гостиной Ольха горная - Обработка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Комплект мебели для гостиной Ольха горная - Покраска',
      productionTime: 0.3,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Комплект мебели для гостиной Ольха горная - Проектный',
      productionTime: 1,
      workshopId: createdWorkshops['Проектный'].id,
    },
    {
      name: 'Комплект мебели для гостиной Ольха горная - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Комплект мебели для гостиной Ольха горная - Расчетный',
      productionTime: 0.4,
      workshopId: createdWorkshops['Расчетный'].id,
    },
    {
      name: 'Комплект мебели для гостиной Ольха горная - Сушка',
      productionTime: 2,
      workshopId: createdWorkshops['Сушильный'].id,
    },
    {
      name: 'Комплект мебели для гостиной Ольха горная - Упаковка',
      productionTime: 0.3,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Стенка для гостиной Вишня темная
    {
      name: 'Стенка для гостиной Вишня темная - Монтаж',
      productionTime: 0.3,
      workshopId:
        createdWorkshops[
          'Монтажа стеклянных, зеркальных вставок и других изделий'
        ].id,
    },
    {
      name: 'Стенка для гостиной Вишня темная - Обработка',
      productionTime: 0.3,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Стенка для гостиной Вишня темная - Покраска',
      productionTime: 0.4,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Стенка для гостиной Вишня темная - Проектный',
      productionTime: 1,
      workshopId: createdWorkshops['Проектный'].id,
    },
    {
      name: 'Стенка для гостиной Вишня темная - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Стенка для гостиной Вишня темная - Расчетный',
      productionTime: 1,
      workshopId: createdWorkshops['Расчетный'].id,
    },
    {
      name: 'Стенка для гостиной Вишня темная - Сборка',
      productionTime: 1,
      workshopId: createdWorkshops['Сборки'].id,
    },
    {
      name: 'Стенка для гостиной Вишня темная - Сушка',
      productionTime: 2,
      workshopId: createdWorkshops['Сушильный'].id,
    },
    {
      name: 'Стенка для гостиной Вишня темная - Столярный',
      productionTime: 1,
      workshopId: createdWorkshops['Столярный'].id,
    },

    // Прихожая Венге Винтаж
    {
      name: 'Прихожая Венге Винтаж - Обработка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Прихожая Венге Винтаж - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Прихожая Венге Винтаж - Сборка',
      productionTime: 1,
      workshopId: createdWorkshops['Сборки'].id,
    },

    // Тумба с вешалкой Дуб натуральный
    {
      name: 'Тумба с вешалкой Дуб натуральный - Обработка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Тумба с вешалкой Дуб натуральный - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Тумба с вешалкой Дуб натуральный - Упаковка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Прихожая-комплект Дуб темный
    {
      name: 'Прихожая-комплект Дуб темный - Монтаж',
      productionTime: 0.3,
      workshopId:
        createdWorkshops[
          'Монтажа стеклянных, зеркальных вставок и других изделий'
        ].id,
    },
    {
      name: 'Прихожая-комплект Дуб темный - Обработка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Прихожая-комплект Дуб темный - Покраска',
      productionTime: 0.5,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Прихожая-комплект Дуб темный - Проектный',
      productionTime: 1.5,
      workshopId: createdWorkshops['Проектный'].id,
    },
    {
      name: 'Прихожая-комплект Дуб темный - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Прихожая-комплект Дуб темный - Расчетный',
      productionTime: 0.5,
      workshopId: createdWorkshops['Расчетный'].id,
    },
    {
      name: 'Прихожая-комплект Дуб темный - Сборка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Сборки'].id,
    },
    {
      name: 'Прихожая-комплект Дуб темный - Столярный',
      productionTime: 1,
      workshopId: createdWorkshops['Столярный'].id,
    },
    {
      name: 'Прихожая-комплект Дуб темный - Сушка',
      productionTime: 2,
      workshopId: createdWorkshops['Сушильный'].id,
    },
    {
      name: 'Прихожая-комплект Дуб темный - Упаковка',
      productionTime: 0.2,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Кровать универсальная Дуб натуральный
    {
      name: 'Кровать универсальная Дуб натуральный - Обработка',
      productionTime: 0.8,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Кровать универсальная Дуб натуральный - Раскрой',
      productionTime: 1.1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Кровать универсальная Дуб натуральный - Сборка',
      productionTime: 0.8,
      workshopId: createdWorkshops['Сборки'].id,
    },
    {
      name: 'Кровать универсальная Дуб натуральный - Упаковка',
      productionTime: 0.3,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Кровать с ящиками Ясень белый
    {
      name: 'Кровать с ящиками Ясень белый - Обработка',
      productionTime: 2,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Кровать с ящиками Ясень белый - Покраска',
      productionTime: 1.5,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Кровать с ящиками Ясень белый - Раскрой',
      productionTime: 2,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Кровать с ящиками Ясень белый - Сборка',
      productionTime: 0.3,
      workshopId: createdWorkshops['Сборки'].id,
    },
    {
      name: 'Кровать с ящиками Ясень белый - Упаковка',
      productionTime: 0.2,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Шкаф-купе 3-х дверный Сосна белая
    {
      name: 'Шкаф-купе 3-х дверный Сосна белая - Монтаж',
      productionTime: 0.5,
      workshopId:
        createdWorkshops[
          'Монтажа стеклянных, зеркальных вставок и других изделий'
        ].id,
    },
    {
      name: 'Шкаф-купе 3-х дверный Сосна белая - Обработка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Шкаф-купе 3-х дверный Сосна белая - Проектный',
      productionTime: 2,
      workshopId: createdWorkshops['Проектный'].id,
    },
    {
      name: 'Шкаф-купе 3-х дверный Сосна белая - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Шкаф-купе 3-х дверный Сосна белая - Расчетный',
      productionTime: 1,
      workshopId: createdWorkshops['Расчетный'].id,
    },
    {
      name: 'Шкаф-купе 3-х дверный Сосна белая - Сборка',
      productionTime: 1.5,
      workshopId: createdWorkshops['Сборки'].id,
    },
    {
      name: 'Шкаф-купе 3-х дверный Сосна белая - Упаковка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Стеллаж Бук натуральный
    {
      name: 'Стеллаж Бук натуральный - Обработка',
      productionTime: 0.3,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Стеллаж Бук натуральный - Покраска',
      productionTime: 1,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Стеллаж Бук натуральный - Проектный',
      productionTime: 1,
      workshopId: createdWorkshops['Проектный'].id,
    },
    {
      name: 'Стеллаж Бук натуральный - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Стеллаж Бук натуральный - Расчетный',
      productionTime: 0.7,
      workshopId: createdWorkshops['Расчетный'].id,
    },
    {
      name: 'Стеллаж Бук натуральный - Сборка',
      productionTime: 0.3,
      workshopId: createdWorkshops['Сборки'].id,
    },
    {
      name: 'Стеллаж Бук натуральный - Столярный',
      productionTime: 0.5,
      workshopId: createdWorkshops['Столярный'].id,
    },
    {
      name: 'Стеллаж Бук натуральный - Сушка',
      productionTime: 2,
      workshopId: createdWorkshops['Сушильный'].id,
    },
    {
      name: 'Стеллаж Бук натуральный - Упаковка',
      productionTime: 0.2,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Шкаф 4 дверный с ящиками Ясень серый
    {
      name: 'Шкаф 4 дверный с ящиками Ясень серый - Обработка',
      productionTime: 1.5,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Шкаф 4 дверный с ящиками Ясень серый - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Шкаф 4 дверный с ящиками Ясень серый - Сборка',
      productionTime: 2,
      workshopId: createdWorkshops['Сборки'].id,
    },
    {
      name: 'Шкаф 4 дверный с ящиками Ясень серый - Столярный',
      productionTime: 1,
      workshopId: createdWorkshops['Столярный'].id,
    },
    {
      name: 'Шкаф 4 дверный с ящиками Ясень серый - Упаковка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Шкаф-пенал Береза белый
    {
      name: 'Шкаф-пенал Береза белый - Обработка',
      productionTime: 1,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Шкаф-пенал Береза белый - Покраска',
      productionTime: 2.5,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Шкаф-пенал Береза белый - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Шкаф-пенал Береза белый - Столярный',
      productionTime: 3,
      workshopId: createdWorkshops['Столярный'].id,
    },
    {
      name: 'Шкаф-пенал Береза белый - Упаковка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Комод 6 ящиков Вишня светлая
    {
      name: 'Комод 6 ящиков Вишня светлая - Обработка',
      productionTime: 0.5,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Комод 6 ящиков Вишня светлая - Покраска',
      productionTime: 1,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Комод 6 ящиков Вишня светлая - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Комод 6 ящиков Вишня светлая - Сборка',
      productionTime: 0.3,
      workshopId: createdWorkshops['Сборки'].id,
    },
    {
      name: 'Комод 6 ящиков Вишня светлая - Столярный',
      productionTime: 2,
      workshopId: createdWorkshops['Столярный'].id,
    },
    {
      name: 'Комод 6 ящиков Вишня светлая - Сушка',
      productionTime: 2,
      workshopId: createdWorkshops['Сушильный'].id,
    },
    {
      name: 'Комод 6 ящиков Вишня светлая - Упаковка',
      productionTime: 0.2,
      workshopId: createdWorkshops['Упаковки'].id,
    },

    // Комод 4 ящика Вишня светлая
    {
      name: 'Комод 4 ящика Вишня светлая - Обработка',
      productionTime: 0.4,
      workshopId: createdWorkshops['Обработки'].id,
    },
    {
      name: 'Комод 4 ящика Вишня светлая - Покраска',
      productionTime: 0.4,
      workshopId: createdWorkshops['Покраски'].id,
    },
    {
      name: 'Комод 4 ящика Вишня светлая - Раскрой',
      productionTime: 1,
      workshopId: createdWorkshops['Раскроя'].id,
    },
    {
      name: 'Комод 4 ящика Вишня светлая - Столярный',
      productionTime: 2,
      workshopId: createdWorkshops['Столярный'].id,
    },
    {
      name: 'Комод 4 ящика Вишня светлая - Сушка',
      productionTime: 2,
      workshopId: createdWorkshops['Сушильный'].id,
    },
    {
      name: 'Комод 4 ящика Вишня светлая - Упаковка',
      productionTime: 0.2,
      workshopId: createdWorkshops['Упаковки'].id,
    },
  ];

  for (const workshop of productWorkshops) {
    await prisma.productWorkshop.create({
      data: workshop,
    });
    console.log(
      `  ✓ Производство "${workshop.name.substring(0, 50)}..." создано`,
    );
  }

  console.log('\n✅ База данных успешно заполнена!');
  console.log(`📊 Статистика:`);
  console.log(`   - Цехи: ${workshops.length}`);
  console.log(`   - Типы продукции: ${productTypes.length}`);
  console.log(`   - Материалы: ${materials.length}`);
  console.log(`   - Продукция: ${products.length}`);
  console.log(`   - Производства: ${productWorkshops.length}`);
}

main()
  .catch((e) => {
    console.error('❌ Ошибка при заполнении БД:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
