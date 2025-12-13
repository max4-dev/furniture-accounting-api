import axios from "axios";
import { CalculateRawMaterialDTO, CalculationResponseDTO, } from "../model/types";
import { calculatorApi } from "./api";

const calculateRawMaterial = async (data: CalculateRawMaterialDTO): Promise<CalculationResponseDTO> => {
  const res = await axios.post<CalculationResponseDTO>(calculatorApi.calculate, data);
  return res.data;
};

export const CalculatorQuery = {
  calculateRawMaterial,
};
