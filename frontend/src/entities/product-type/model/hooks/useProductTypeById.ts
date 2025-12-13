import { useQuery } from "@tanstack/react-query";
import { productTypesQuery } from "../../api/query";

export const useProductTypeById = (id: string | undefined) => {
  return useQuery({
    queryKey: ['product-type', id],
    queryFn: () => productTypesQuery.getById(id),
    select: (res) => res?.data,
    enabled: !!id,
  });
};
