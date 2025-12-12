import { CONFIG } from "@/shared/config";

export const materialApi = {
  all: `${CONFIG.API_URL}/materials`,
  byId: (id: string) => `${CONFIG.API_URL}/materials/${id}`,
};
