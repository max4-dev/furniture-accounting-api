import { CONFIG } from "@/shared/config";

export const productTypeApi = {
  all: `${CONFIG.API_URL}/product-types`,
  byId: (id: string) => `${CONFIG.API_URL}/product-types/${id}`,
};
