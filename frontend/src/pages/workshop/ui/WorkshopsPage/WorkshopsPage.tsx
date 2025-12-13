import { useWorkshops } from "@/entities/workshop/model/hooks/useWorkshops";
import { WorkshopsTable } from "@/widgets/workshop/ui/WorkshopTable/WorkshopTable";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router";

export const WorkshopsPage = () => {
  const { data: workshops = [] } = useWorkshops();
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate("/create-workshop")}
        >
          Добавить цех
        </Button>
      </div>
      <WorkshopsTable data={workshops} />
    </>
  );
};
