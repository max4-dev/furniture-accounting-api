import { useProductTypeById } from "@/entities/product-type/model";
import { ProductTypeForm } from "@/features/product-type/ui/ProductTypeForm/ProductTypeForm";
import { useParams } from "react-router";

export const EditProductTypePage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: productType } = useProductTypeById(id);

  if (!productType) {
    return null;
  }

  return <ProductTypeForm productType={productType} />;
};
