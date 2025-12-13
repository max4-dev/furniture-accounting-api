import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(1, "Название обязательно")
    .min(3, "Название должно быть не менее 3 символов")
    .max(100, "Название не должно превышать 100 символов"),
  
  article: z
    .string()
    .min(1, "Артикул обязателен")
    .min(2, "Артикул должен быть не менее 2 символов")
    .max(50, "Артикул не должен превышать 50 символов"),
  
  minimumCost: z
    .number()
    .min(0, "Цена не может быть отрицательной")
    .max(1000000, "Цена не должна превышать 1 000 000"),
  
  typeId: z
    .number()
    .min(1, "Выберите тип"),
  
  materialId: z
    .number()
    .min(1, "Выберите материал"),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
