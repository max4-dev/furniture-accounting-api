import { useMaterials } from "@/entities/material/model";
import { MaterialsTable } from "@/widgets/material/ui/MaterialTable/MaterialTable";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router";

export const MaterialsPage = () => {
  const { data: materials = [] } = useMaterials();
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate("/create-material")}
        >
          Добавить материал
        </Button>
      </div>
      <MaterialsTable data={materials} />
    </>
  );
};
