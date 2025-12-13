import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { CalculatorQuery } from "../../api/query";
import { CalculateRawMaterialDTO } from "../types";

export const useCalculateRawMaterial = () => {
  return useMutation({
    mutationKey: ['calculate-raw-material'],
    mutationFn: (data: CalculateRawMaterialDTO) => CalculatorQuery.calculateRawMaterial(data),
    onSuccess: () => {
      message.success("Расчет выполнен успешно");
    },
    onError: () => {
      message.error("Ошибка при расчете. Проверьте данные.");
    },
  });
};
