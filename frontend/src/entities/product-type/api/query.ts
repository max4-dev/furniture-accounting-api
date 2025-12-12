import axios from "axios";
import { ProductTypeDTO } from "../model/types";
import { productTypeApi } from "./api";

const getAll = async () => {
  const res = await axios.get<ProductTypeDTO[]>(productTypeApi.all);

  return res;
};


const getById = async (id: string) => {
  const res = await axios.get<ProductTypeDTO>(productTypeApi.byId(id));

  return res;
};

export const productsQuery = {
  getAll,
  getById,
};
