import axios from "axios";
import { MaterialDTO } from "../model/types";
import { materialApi } from "./api";

const getAll = async () => {
  const res = await axios.get<MaterialDTO[]>(materialApi.all);

  return res;
};


const getById = async (id: string) => {
  const res = await axios.get<MaterialDTO>(materialApi.byId(id));

  return res;
};

export const productsQuery = {
  getAll,
  getById,
};
