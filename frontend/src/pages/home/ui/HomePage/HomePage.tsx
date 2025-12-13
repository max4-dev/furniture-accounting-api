import { useProducts } from "@/entities/product/model";
import { ProductsTable } from "@/widgets/product/ui";
import {
  PlusOutlined
} from '@ant-design/icons';
import { Button } from "antd";
import { useNavigate } from "react-router";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const { data: products } = useProducts();
  const navigate = useNavigate();

  if (!products) {
    return null;
  }
  
  return (
    <>
    <div className={styles.top}>
      <Button onClick={() => navigate("/create-product")} size="large" type="primary" icon={<PlusOutlined />}>
        Добавить продукт
      </Button>
    </div>
      <ProductsTable products={products} />
    </>
  )
} 