import { useMaterials } from "@/entities/material/model";
import { useProductTypes } from "@/entities/product-type/model";
import { useProductById } from "@/entities/product/model/hooks/useProductById";
import { EditProductForm } from "@/features/product/ui/EditProductForm/EditProductForm";
import { useParams } from "react-router";

export const EditProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product } = useProductById(id);
  const { data: materials } = useMaterials();
  const { data: types } = useProductTypes();

  if (!product) {
    return null;
  }

  return (
    <EditProductForm 
    product={product} 
    materials={materials} 
    types={types} 
  />

  )
}