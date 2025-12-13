import { useQuery } from "@tanstack/react-query";
import { productsQuery } from "../../api";
import { mapProductDtoToView } from "../../api/mapper";

export const useProducts = () => useQuery({
  queryKey: ["products"],
  queryFn: productsQuery.getAll,
  select: (data) => data?.map(mapProductDtoToView), 
});