import { useQuery } from "@tanstack/react-query";
import { ProductWorkshopsQuery } from "../../api/query";

export const useProductWorkshops = () => {
  return useQuery({
    queryKey: ['product-workshops'],
    queryFn: () => ProductWorkshopsQuery.getAll(),
    select: (res) => res.data,
  });
};
