import { MaterialDTO } from "@/entities/material/model/types";
import { ProductTypeDTO } from "@/entities/product-type/model/types";
import { ProductView } from "@/entities/product/model/types";

export interface EditProductFormProps {
  product: ProductView;
  materials?: MaterialDTO[];
  types?: ProductTypeDTO[];
}