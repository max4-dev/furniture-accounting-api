import { z } from "zod";

export const createProductTypeSchema = z.object({
  name: z
    .string({ message: "Название должно быть строкой" })
    .min(1, "Название обязательно")
    .min(2, "Название должно содержать минимум 2 символа")
    .max(100, "Название не должно превышать 100 символов"),
  
  coefficient: z
    .number({ message: "Коэффициент должен быть числом" })
    .min(0, "Коэффициент не может быть отрицательным")
    .max(100, "Коэффициент не должен превышать 100"),
});

export type CreateProductTypeInput = z.infer<typeof createProductTypeSchema>;
