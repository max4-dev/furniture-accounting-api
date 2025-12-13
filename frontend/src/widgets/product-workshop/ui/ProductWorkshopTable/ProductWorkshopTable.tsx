import { useDeleteProductWorkshop } from "@/entities/product-workshop/model/hooks/useDeleteProductWorkshop";
import { ProductWorkshopDTO } from "@/entities/product-workshop/model/types";
import { Button, Modal, Table } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./ProductWorkshopTable.module.css";

interface ProductWorkshopsTableProps {
  data: ProductWorkshopDTO[];
}

export const ProductWorkshopsTable = ({ data }: ProductWorkshopsTableProps) => {
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  
  const { mutate, isPending } = useDeleteProductWorkshop();
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
      <Table<ProductWorkshopDTO> dataSource={data} rowKey="id">
        <Table.Column title="Название этапа" dataIndex="name" key="name" />
        
        {/* Для отображения названия цеха вместо ID здесь можно 
            либо джойнить данные на бэке, либо искать имя в списке цехов на фронте */}
        <Table.Column 
          title="ID Цеха" 
          dataIndex="workshopId" 
          key="workshopId" 
        />
        
        <Table.Column 
          title="Время (мин)" 
          dataIndex="productionTime" 
          key="productionTime" 
        />
        
        <Table.Column
          title="Действия"
          render={(record) => (
            <div className={styles.actions}>
              <Button onClick={() => setIdToDelete(record.id)} danger>
                Удалить
              </Button>
              <Button onClick={() => navigate(`/product-workshops/edit/${record.id}`)}>
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
        <Title level={5}>Вы уверены что хотите удалить этот этап?</Title>
      </Modal>
    </>
  );
};
