import { useQuery } from "@tanstack/react-query";
import { ProductWorkshopsQuery } from "../../api/query";

export const useProductWorkshopById = (id: string | undefined) => {
  return useQuery({
    queryKey: ['product-workshop', id],
    queryFn: () => ProductWorkshopsQuery.getById(id),
    select: (res) => res?.data,
    enabled: !!id,
  });
};
