import { z } from "zod";

export const calculatorSchema = z.object({
  productTypeId: z.number().min(1, "Выберите тип продукции"),
  
  materialId: z.number().min(1, "Выберите материал"),
  
  quantity: z.number().min(1, "Количество должно быть больше 0"),
  
  length: z.number().min(0, "Длина не может быть отрицательной"),
  
  width: z.number().min(0, "Ширина не может быть отрицательной"),
});

export type CalculatorInput = z.infer<typeof calculatorSchema>;
