

import axios from "axios";
import { ProductCreateDTO, ProductDTO } from "../model/types";
import { productsApi } from "./api";

const getAll = async () => {
  try {
    const res = await axios.get<ProductDTO[]>(productsApi.all);

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


const getById = async (id: string | number) => {
  try {
    const res = await axios.get<ProductDTO>(productsApi.byId(id));

    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const create = async (data: ProductCreateDTO): Promise<ProductDTO> => {
  const res = await axios.post<ProductDTO>(productsApi.all, data);
  return res.data;
};

const deleteById = async (id: number) => {
  const res = await axios.delete<ProductDTO>(productsApi.byId(id));

  return res.data;
};

const update = async (id: number, data: ProductCreateDTO): Promise<ProductDTO> => {
  const res = await axios.patch<ProductDTO>(productsApi.byId(id), data);
  return res.data;
};

export const productsQuery = {
  getAll,
  create,
  getById,
  deleteById,
  update
};
