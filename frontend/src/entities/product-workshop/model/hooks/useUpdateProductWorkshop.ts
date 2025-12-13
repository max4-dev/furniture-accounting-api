import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { ProductWorkshopsQuery } from "../../api/query";
import { ProductWorkshopDTO } from "../types";


export const useUpdateProductWorkshop = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['update-product-workshop'],
    mutationFn: ({ id, data }: { id: number; data: Omit<ProductWorkshopDTO, 'id'> }) =>
      ProductWorkshopsQuery.update(id, data),
    onSuccess: () => {
      message.success("Успешно обновлено");
      queryClient.invalidateQueries({ queryKey: ['product-workshops'] });
    },
    onError: () => {
      message.error("Не удалось обновить");
    },
  });
};
