import { useQuery } from "@tanstack/react-query";
import { materialsQuery } from "../../api";


export const useMaterialById = (id: string | undefined) => {
  return useQuery({
    queryKey: ['material', id],
    queryFn: () => materialsQuery.getById(id),
    select: (res) => res?.data,
    enabled: !!id,
  });
};
