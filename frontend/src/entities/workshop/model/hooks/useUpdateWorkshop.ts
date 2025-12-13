import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { workshopsQuery } from "../../api/query";
import { WorkshopDTO } from "../types";


export const useUpdateWorkshop = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['update-workshop'],
    mutationFn: ({ id, data }: { id: number; data: Omit<WorkshopDTO, 'id'> }) =>
      workshopsQuery.update(id, data),
    onSuccess: () => {
      message.success("Успешно обновлено");
      queryClient.invalidateQueries({ queryKey: ['workshops'] });
    },
    onError: () => {
      message.error("Не удалось обновить");
    },
  });
};
