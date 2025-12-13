import { z } from "zod";

export const createProductWorkshopSchema = z.object({
  name: z.string().min(1, "Название обязательно").max(100),
  workshopId: z.number().min(1, "Выберите тип"),
  productionTime: z.number().min(0, "Время не может быть отрицательным"),
});

export type CreateProductWorkshopInput = z.infer<typeof createProductWorkshopSchema>;
