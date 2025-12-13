import { useProductWorkshops } from "@/entities/product-workshop/model";
import { ProductWorkshopsTable } from "@/widgets/product-workshop/ui/ProductWorkshopTable/ProductWorkshopTable";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router";

export const ProductWorkshopsPage = () => {
  const { data: productWorkshops = [] } = useProductWorkshops();
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate("/create-product-workshop")}
        >
          Добавить этап
        </Button>
      </div>
      <ProductWorkshopsTable data={productWorkshops} />
    </>
  );
};
