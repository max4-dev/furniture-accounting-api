import { CONFIG } from "@/shared/config";

export const productWorkshopApi = {
  all: `${CONFIG.API_URL}/product-workshops`,
  byId: (id: string | number) => `${CONFIG.API_URL}/product-workshops/${id}`,
};
