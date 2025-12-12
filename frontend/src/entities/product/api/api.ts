import { CONFIG } from "@/shared/config";


export const productsApi = {
  all: `${CONFIG.API_URL}/products`,
  byId: (id: string) => `${CONFIG.API_URL}/products/${id}`,
};
