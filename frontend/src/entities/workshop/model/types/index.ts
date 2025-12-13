export interface WorkshopDTO {
  id: number;
  name: string;
  numberWorkers: number;
  type: string;
}

export type WorkshopCreateDTO = Omit<WorkshopDTO, 'id'>;