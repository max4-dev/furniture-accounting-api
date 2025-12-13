import { z } from "zod";

export const createMaterialSchema = z.object({
  name: z
    .string({ message: "Название должно быть строкой" })
    .min(1, "Название обязательно")
    .min(2, "Название должно содержать минимум 2 символа")
    .max(100, "Название не должно превышать 100 символов"),
  
  missingPercent: z
    .number({ message: "Процент потерь должен быть числом" })
    .min(0, "Процент не может быть отрицательным")
    .max(100, "Процент не должен превышать 100"),
});

export type CreateMaterialInput = z.infer<typeof createMaterialSchema>;
