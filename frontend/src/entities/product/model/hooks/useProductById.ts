import { useQuery } from "@tanstack/react-query";
import { productsQuery } from "../../api";

export const useProductById = (id?: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => {
      if (!id) return null;
      return productsQuery.getById(id);
    },
    enabled: !!id,
  });
};
