import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { productsQuery } from "../../api";
import { ProductCreateDTO } from "../types";


export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['create-product'],
    mutationFn: (data: ProductCreateDTO) => productsQuery.create(data),
    onSuccess: () => {
      message.success("Успешно создан");
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (error) => {
      console.error(error);
      message.error("Не удалось создать");
    },
  });
};
