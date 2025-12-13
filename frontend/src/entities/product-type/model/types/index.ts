export interface ProductTypeDTO {
  name: string;
  id: number;
  coefficient: number;
}

export type ProductTypeCreateDTO = Omit<ProductTypeDTO, 'id'>;