import axios from "axios";
import { WorkshopCreateDTO, WorkshopDTO } from "../model/types";
import { workshopApi } from "./api";

const getAll = async () => {
  const res = await axios.get<WorkshopDTO[]>(workshopApi.all);

  return res;
};


const getById = async (id: string | undefined) => {
  if (!id) {
    return null;
  }
  const res = await axios.get<WorkshopDTO>(workshopApi.byId(id));

  return res;
};

const deleteById = async (id: number): Promise<WorkshopDTO> => {
  const res = await axios.delete<WorkshopDTO>(workshopApi.byId(id));
  return res.data;
};

const create = async (data: WorkshopCreateDTO): Promise<WorkshopDTO> => {
  const res = await axios.post<WorkshopDTO>(workshopApi.all, data);
  return res.data;
};

const update = async (id: number, data: WorkshopCreateDTO): Promise<WorkshopDTO> => {
  const res = await axios.patch<WorkshopDTO>(workshopApi.byId(id), data);
  return res.data;
};

export const workshopsQuery = {
  getAll,
  getById,
  deleteById,
  create,
  update,
};
