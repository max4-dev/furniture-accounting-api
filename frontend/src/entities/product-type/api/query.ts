import axios from "axios";
import { ProductTypeCreateDTO, ProductTypeDTO } from "../model/types";
import { productTypeApi } from "./api";

const getAll = async () => {
  const res = await axios.get<ProductTypeDTO[]>(productTypeApi.all);

  return res;
};


const getById = async (id: string | undefined) => {
  if (!id) {
    return null;
  }
  const res = await axios.get<ProductTypeDTO>(productTypeApi.byId(id));

  return res;
};

const deleteById = async (id: number): Promise<ProductTypeDTO> => {
  const res = await axios.delete<ProductTypeDTO>(productTypeApi.byId(id));
  return res.data;
};

const create = async (data: ProductTypeCreateDTO): Promise<ProductTypeDTO> => {
  const res = await axios.post<ProductTypeDTO>(productTypeApi.all, data);
  return res.data;
};

const update = async (id: number, data: ProductTypeCreateDTO): Promise<ProductTypeDTO> => {
  const res = await axios.patch<ProductTypeDTO>(productTypeApi.byId(id), data);
  return res.data;
};

export const productTypesQuery = {
  getAll,
  getById,
  deleteById,
  create,
  update,
};
