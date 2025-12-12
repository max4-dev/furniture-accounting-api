

import axios from "axios";
import { ProductDTO } from "../model/types";
import { productsApi } from "./api";

const getAll = async () => {
  const res = await axios.get<ProductDTO[]>(productsApi.all);

  return res.data;
};


const getById = async (id: string) => {
  const res = await axios.get<ProductDTO>(productsApi.byId(id));

  return res.data;
};

export const productsQuery = {
  getAll,
  getById,
};
