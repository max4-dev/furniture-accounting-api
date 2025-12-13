import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { productsQuery } from "../../api";
import { ProductCreateDTO } from "../types";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['update-product'],
    mutationFn: ({ id, data }: { id: number; data: ProductCreateDTO }) =>
      productsQuery.update(id, data),
    onSuccess: () => {
      message.success("Продукт успешно обновлен");
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (error) => {
      console.error(error);
      message.error("Не удалось обновить продукт");
    },
  });
};
