import { useProducts } from "@/entities/product/model/hooks/useProducts";
import { ProductsTable } from "@/widgets/product/ui";

export const HomePage = () => {
  const { data: products } = useProducts();
  console.log(products);

  if (!products) {
    return null;
  }
  
  return (
    <ProductsTable products={products} />
  )
} 