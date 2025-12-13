import { z } from "zod";

export const createWorkshopSchema = z.object({
  name: z.string().min(1, "Название обязательно").max(100),
  numberWorkers: z.number().min(0, "Количество сотрудников не может быть отрицательным"),
  type: z.string().min(1, "Тип обязателен"),
});

export type CreateWorkshopInput = z.infer<typeof createWorkshopSchema>;
