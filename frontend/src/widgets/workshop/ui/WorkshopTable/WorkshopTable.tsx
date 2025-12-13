import { useDeleteWorkshop } from "@/entities/workshop/model/hooks/useDeleteWorkshop";
import { WorkshopDTO } from "@/entities/workshop/model/types";
import { Button, Modal, Table } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./WorkshopTable.module.css";

interface WorkshopsTableProps {
  data: WorkshopDTO[];
}

export const WorkshopsTable = ({ data }: WorkshopsTableProps) => {
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  
  const { mutate, isPending } = useDeleteWorkshop();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!idToDelete) return;

    mutate(idToDelete, {
      onSuccess: () => {
        setIdToDelete(null);
      }
    });
  };

  return (
    <>
      <Table<WorkshopDTO> dataSource={data} rowKey="id">
        <Table.Column title="Название" dataIndex="name" key="name" />
      
        <Table.Column 
          title="Сотрудников" 
          dataIndex="numberWorkers" 
          key="numberWorkers" 
        />

        <Table.Column 
          title="Тип" 
          dataIndex="type" 
          key="type" 
        />
        
        <Table.Column
          title="Действия"
          render={(record) => (
            <div className={styles.actions}>
              <Button onClick={() => setIdToDelete(record.id)} danger>
                Удалить
              </Button>
              <Button onClick={() => navigate(`/workshops/edit/${record.id}`)}>
                Изменить
              </Button>
            </div>
          )}
        />
      </Table>

      <Modal
        open={Boolean(idToDelete)}
        onCancel={() => setIdToDelete(null)}
        onOk={handleDelete}
        okText="Удалить"
        cancelText="Отмена"
        okButtonProps={{ danger: true }}
        confirmLoading={isPending}
      >
        <Title level={5}>Вы уверены что хотите удалить цех?</Title>
      </Modal>
    </>
  );
};
