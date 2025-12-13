import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { ProductWorkshopsQuery } from "../../api/query";
import { ProductWorkshopCreateDTO } from "../types";

export const useCreateProductWorkshop = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['create-product-workshop'],
    mutationFn: (data: ProductWorkshopCreateDTO) => ProductWorkshopsQuery.create(data),
    onSuccess: () => {
      message.success("Успешно создано");
      queryClient.invalidateQueries({ queryKey: ['product-workshops'] });
    },
    onError: () => {
      message.error("Не удалось создать");
    },
  });
};
