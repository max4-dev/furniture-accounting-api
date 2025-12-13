import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { workshopsQuery } from "../../api/query";

export const useDeleteWorkshop = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['delete-workshop'],
    mutationFn: (id: number) => workshopsQuery.deleteById(id),
    onSuccess: () => {
      message.success("Успешно удалено ");
      queryClient.invalidateQueries({ queryKey: ['workshops'] });
    },
    onError: () => {
      message.error("Не удалось удалить");
    },
  });
};
