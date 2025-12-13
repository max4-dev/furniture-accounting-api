import { CONFIG } from "@/shared/config";

export const productTypeApi = {
  all: `${CONFIG.API_URL}/product-types`,
  byId: (id: string | number) => `${CONFIG.API_URL}/product-types/${id}`,
};
