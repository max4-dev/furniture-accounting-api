import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { materialsQuery } from "../../api";
import { MaterialCreateDTO } from "../types";


export const useUpdateMaterial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['update-product-type'],
    mutationFn: ({ id, data }: { id: number; data: MaterialCreateDTO }) =>
      materialsQuery.update(id, data),
    onSuccess: () => {
      message.success("Тип продукта успешно обновлен");
      queryClient.invalidateQueries({ queryKey: ['product-types'] });
    },
    onError: () => {
      message.error("Не удалось обновить тип продукта");
    },
  });
};
