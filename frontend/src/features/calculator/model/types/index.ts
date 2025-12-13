export interface CalculateRawMaterialDTO {
  productTypeId: number;
  materialId: number;
  quantity: number;
  length: number;
  width: number;
}

export interface CalculationResponseDTO {
  requiredRawMaterial: number;
  originalAmount: number;
  wastePercent: number;
  finalAmount: number;
}
