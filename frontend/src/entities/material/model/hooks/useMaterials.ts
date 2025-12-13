import { useQuery } from "@tanstack/react-query";
import { materialsQuery } from "../../api";


export const useMaterials = () => {
  return useQuery({
    queryKey: ['materials'],
    queryFn: () => materialsQuery.getAll(),
    select: (res) => res.data,
  });
};
