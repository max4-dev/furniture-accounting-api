import axios from "axios";
import { MaterialCreateDTO, MaterialDTO } from "../model/types";
import { materialApi } from "./api";

const getAll = async () => {
  const res = await axios.get<MaterialDTO[]>(materialApi.all);

  return res;
};


const getById = async (id: string | undefined) => {
  if (!id) {
    return null;
  }
  const res = await axios.get<MaterialDTO>(materialApi.byId(id));

  return res;
};

const deleteById = async (id: number): Promise<MaterialDTO> => {
  const res = await axios.delete<MaterialDTO>(materialApi.byId(id));
  return res.data;
};

const create = async (data: MaterialCreateDTO): Promise<MaterialDTO> => {
  const res = await axios.post<MaterialDTO>(materialApi.all, data);
  return res.data;
};

const update = async (id: number, data: MaterialCreateDTO): Promise<MaterialDTO> => {
  const res = await axios.patch<MaterialDTO>(materialApi.byId(id), data);
  return res.data;
};

export const materialsQuery = {
  getAll,
  getById,
  deleteById,
  create,
  update,
};
