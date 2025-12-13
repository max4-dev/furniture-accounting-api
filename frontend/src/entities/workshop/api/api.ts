import { CONFIG } from "@/shared/config";

export const workshopApi = {
  all: `${CONFIG.API_URL}/workshops`,
  byId: (id: string | number) => `${CONFIG.API_URL}/workshops/${id}`,
};
