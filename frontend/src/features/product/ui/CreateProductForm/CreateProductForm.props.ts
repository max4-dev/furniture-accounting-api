import { MaterialDTO } from "@/entities/material/model/types";
import { ProductTypeDTO } from "@/entities/product-type/model/types";

export interface CreateProductFormProps {
  materials?: MaterialDTO[];
  types?: ProductTypeDTO[];
}