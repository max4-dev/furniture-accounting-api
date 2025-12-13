import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { ProductWorkshopsQuery } from "../../api/query";

export const useDeleteProductWorkshop = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['delete-product-workshop'],
    mutationFn: (id: number) => ProductWorkshopsQuery.deleteById(id),
    onSuccess: () => {
      message.success("Успешно удалено ");
      queryClient.invalidateQueries({ queryKey: ['product-workshops'] });
    },
    onError: () => {
      message.error("Не удалось удалить");
    },
  });
};
