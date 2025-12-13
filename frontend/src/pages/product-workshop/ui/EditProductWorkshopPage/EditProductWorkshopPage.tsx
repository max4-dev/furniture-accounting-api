import { useProductWorkshopById } from "@/entities/product-workshop/model";
import { ProductWorkshopForm } from "@/features/product-workshop/ui/WorkshopForm/WorkshopForm";
import { useParams } from "react-router";

export const EditProductWorkshopPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: productWorkshop } = useProductWorkshopById(id);

  if (!productWorkshop) {
    return null;
  }

  return <ProductWorkshopForm productWorkshop={productWorkshop} />;
};
