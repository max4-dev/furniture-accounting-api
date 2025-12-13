import { useQuery } from "@tanstack/react-query";
import { productTypesQuery } from "../../api/query";

export const useProductTypes = () => {
  return useQuery({
    queryKey: ['product-types'],
    queryFn: () => productTypesQuery.getAll(),
    select: (res) => res.data,
  });
};
