export interface MaterialDTO {
  name: string;
  id: number;
  missingPercent: number;
}

export type MaterialCreateDTO = Omit<MaterialDTO, 'id'>;