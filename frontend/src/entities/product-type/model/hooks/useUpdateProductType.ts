import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { productTypesQuery } from "../../api/query";
import { ProductTypeDTO } from "../types";


export const useUpdateProductType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['update-product-type'],
    mutationFn: ({ id, data }: { id: number; data: Omit<ProductTypeDTO, 'id'> }) =>
      productTypesQuery.update(id, data),
    onSuccess: () => {
      message.success("Тип продукта успешно обновлен");
      queryClient.invalidateQueries({ queryKey: ['product-types'] });
    },
    onError: () => {
      message.error("Не удалось обновить тип продукта");
    },
  });
};
