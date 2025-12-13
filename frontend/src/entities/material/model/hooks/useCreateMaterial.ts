import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { materialsQuery } from "../../api";
import { MaterialCreateDTO } from "../types";


export const useCreateMaterial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['create-product-type'],
    mutationFn: (data: MaterialCreateDTO) => materialsQuery.create(data),
    onSuccess: () => {
      message.success("Успешно создано");
      queryClient.invalidateQueries({ queryKey: ['product-types'] });
    },
    onError: () => {
      message.error("Не удалось создать");
    },
  });
};
