import { useMaterials } from "@/entities/material/model";
import { useProductTypes } from "@/entities/product-type/model";
import { CreateProductForm } from "@/features/product/ui";

export const CreateProductPage = () => {
  const { data: materials } = useMaterials();
  const { data: types } = useProductTypes();
  return (
    <CreateProductForm materials={materials} types={types} />
  )
}