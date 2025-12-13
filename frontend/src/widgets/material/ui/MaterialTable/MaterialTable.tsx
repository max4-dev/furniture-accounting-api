import { useDeleteMaterial } from "@/entities/material/model/hooks/useDeleteMaterial";
import { MaterialDTO } from "@/entities/material/model/types";
import { Button, Modal, Table } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./MaterialTable.module.css";

interface MaterialsTableProps {
  data: MaterialDTO[];
}

export const MaterialsTable = ({ data }: MaterialsTableProps) => {
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  
  const { mutate, isPending } = useDeleteMaterial();
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
      <Table<MaterialDTO> dataSource={data} rowKey="id">
        <Table.Column title="Название" dataIndex="name" key="name" />
      
        <Table.Column 
          title="Процент потерь" 
          dataIndex="missingPercent" 
          key="missingPercent" 
        />
        
        <Table.Column
          title="Действия"
          render={(record) => (
            <div className={styles.actions}>
              <Button onClick={() => setIdToDelete(record.id)} danger>
                Удалить
              </Button>
              <Button onClick={() => navigate(`/materials/edit/${record.id}`)}>
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
        <Title level={5}>Вы уверены что хотите удалить материал?</Title>
      </Modal>
    </>
  );
};
