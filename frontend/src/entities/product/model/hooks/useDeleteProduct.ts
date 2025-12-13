import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { productsQuery } from "../../api";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['delete-product'],
    mutationFn: productsQuery.deleteById,
    
    onSuccess: () => {
      message.success("Продукт успешно удален");
      
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    
    onError: (error) => {
      console.error(error);
      message.error("Не удалось удалить продукт");
    },
  });
};
