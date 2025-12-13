import { useQuery } from "@tanstack/react-query";
import { workshopsQuery } from "../../api/query";

export const useWorkshopById = (id: string | undefined) => {
  return useQuery({
    queryKey: ['workshop', id],
    queryFn: () => workshopsQuery.getById(id),
    select: (res) => res?.data,
    enabled: !!id,
  });
};
