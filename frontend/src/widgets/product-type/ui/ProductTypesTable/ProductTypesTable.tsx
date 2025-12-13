import { useDeleteProductType } from "@/entities/product-type/model/hooks/useDeleteProductType";
import { ProductTypeDTO } from "@/entities/product-type/model/types";
import { Button, Modal, Table } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./ProductTypesTable.module.css";

interface ProductTypesTableProps {
  data: ProductTypeDTO[];
}

export const ProductTypesTable = ({ data }: ProductTypesTableProps) => {
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const { mutate, isPending } = useDeleteProductType();
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
      <Table<ProductTypeDTO> dataSource={data} rowKey="id">
        <Table.Column title="Название" dataIndex="name" key="name" />
        <Table.Column title="Коэффициент" dataIndex="coefficient" key="coefficient" />
        <Table.Column
          title="Действия"
          render={(record) => (
            <div className={styles.actions}>
              <Button onClick={() => setIdToDelete(record.id)} danger>
                Удалить
              </Button>
              <Button onClick={() => navigate(`/product-types/edit/${record.id}`)}>
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
        <Title level={5}>Вы уверены что хотите удалить?</Title>
      </Modal>
    </>
  );
};
