import axios from "axios";
import { ProductWorkshopCreateDTO, ProductWorkshopDTO } from "../model/types";
import { productWorkshopApi } from "./api";

const getAll = async () => {
  const res = await axios.get<ProductWorkshopDTO[]>(productWorkshopApi.all);

  return res;
};


const getById = async (id: string | undefined) => {
  if (!id) {
    return null;
  }
  const res = await axios.get<ProductWorkshopDTO>(productWorkshopApi.byId(id));

  return res;
};

const deleteById = async (id: number): Promise<ProductWorkshopDTO> => {
  const res = await axios.delete<ProductWorkshopDTO>(productWorkshopApi.byId(id));
  return res.data;
};

const create = async (data: ProductWorkshopCreateDTO): Promise<ProductWorkshopDTO> => {
  const res = await axios.post<ProductWorkshopDTO>(productWorkshopApi.all, data);
  return res.data;
};

const update = async (id: number, data: ProductWorkshopCreateDTO): Promise<ProductWorkshopDTO> => {
  const res = await axios.patch<ProductWorkshopDTO>(productWorkshopApi.byId(id), data);
  return res.data;
};

export const ProductWorkshopsQuery = {
  getAll,
  getById,
  deleteById,
  create,
  update,
};
