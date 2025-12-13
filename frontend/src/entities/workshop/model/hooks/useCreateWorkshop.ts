import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { workshopsQuery } from "../../api/query";
import { WorkshopCreateDTO } from "../types";

export const useCreateWorkshop = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['create-workshop'],
    mutationFn: (data: WorkshopCreateDTO) => workshopsQuery.create(data),
    onSuccess: () => {
      message.success("Успешно создано");
      queryClient.invalidateQueries({ queryKey: ['workshops'] });
    },
    onError: () => {
      message.error("Не удалось создать");
    },
  });
};
