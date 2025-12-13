import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { materialsQuery } from "../../api/query";

export const useDeleteMaterial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['delete-product-type'],
    mutationFn: (id: number) => materialsQuery.deleteById(id),
    onSuccess: () => {
      message.success("Тип продукта успешно удален");
      queryClient.invalidateQueries({ queryKey: ['product-types'] });
    },
    onError: () => {
      message.error("Не удалось удалить тип продукта");
    },
  });
};
