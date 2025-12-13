import { useProductTypes } from "@/entities/product-type/model";
import { ProductTypesTable } from "@/widgets/product-type/ui/ProductTypesTable/ProductTypesTable";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router";

export const ProductTypesPage = () => {
  const { data: productTypes = [] } = useProductTypes();
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate("/create-product-type")}
        >
          Добавить тип
        </Button>
      </div>
      <ProductTypesTable data={productTypes} />
    </>
  );
};
