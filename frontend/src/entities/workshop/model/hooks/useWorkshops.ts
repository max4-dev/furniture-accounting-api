import { useQuery } from "@tanstack/react-query";
import { workshopsQuery } from "../../api/query";

export const useWorkshops = () => {
  return useQuery({
    queryKey: ['workshops'],
    queryFn: () => workshopsQuery.getAll(),
    select: (res) => res.data,
  });
};
