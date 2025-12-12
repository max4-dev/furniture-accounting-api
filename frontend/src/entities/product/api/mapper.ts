import { ProductDTO, ProductView } from "../model/types";

export const mapProductDtoToView = (dto: ProductDTO): ProductView => ({
  id: dto.id,
  article: dto.article,
  name: dto.name,
  minimumCost: dto.minimumCost,
  material: dto.material,
  type: dto.type,
});