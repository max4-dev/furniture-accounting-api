export interface ProductWorkshopDTO {
  id: number;
  name: string;
  workshopId: number;
  productionTime: number;
}

export type ProductWorkshopCreateDTO = Omit<ProductWorkshopDTO, 'id'>;