import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { productTypesQuery } from "../../api/query";
import { ProductTypeCreateDTO } from "../types";

export const useCreateProductType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['create-product-type'],
    mutationFn: (data: ProductTypeCreateDTO) => productTypesQuery.create(data),
    onSuccess: () => {
      message.success("Успешно создано");
      queryClient.invalidateQueries({ queryKey: ['product-types'] });
    },
    onError: () => {
      message.error("Не удалось создать");
    },
  });
};
