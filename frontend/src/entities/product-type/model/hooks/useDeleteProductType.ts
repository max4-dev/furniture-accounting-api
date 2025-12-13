import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { productTypesQuery } from "../../api/query";

export const useDeleteProductType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['delete-product-type'],
    mutationFn: (id: number) => productTypesQuery.deleteById(id),
    onSuccess: () => {
      message.success("Успешно удалено ");
      queryClient.invalidateQueries({ queryKey: ['product-types'] });
    },
    onError: () => {
      message.error("Не удалось удалить");
    },
  });
};
