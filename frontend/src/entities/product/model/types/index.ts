import { MaterialDTO } from "@/entities/material/@x/product";
import { ProductTypeDTO } from "@/entities/product-type/@x/product";

export interface ProductDTO {
  type: ProductTypeDTO;
  material: MaterialDTO;
  name: string;
  article: string;
  minimumCost: number;
  id: number;
  typeId: number;
  materialId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductCreateDTO = Omit<ProductDTO, 'id' | 'createdAt' | 'updatedAt' | 'type' | 'material'>;

export interface ProductView {
  id: number;
  name: string;
  article: string;
  minimumCost: number;
  type: ProductTypeDTO;
  material: MaterialDTO;
}