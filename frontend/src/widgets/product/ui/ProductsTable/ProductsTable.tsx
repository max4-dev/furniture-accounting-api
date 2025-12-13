import { useDeleteProduct } from "@/entities/product/model";
import { ProductView } from "@/entities/product/model/types";
import { Button, Modal, Table } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./ProductsTable.module.css";
import { ProductsTableProps } from "./ProductsTable.props";

export const ProductsTable = ({ products }: ProductsTableProps) => {
  const [productIdToDelete, setProductIdToDelete] = useState<number | null>(null);
  const { mutate, isPending } = useDeleteProduct();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!productIdToDelete) return;

    mutate(productIdToDelete, {
      onSuccess: () => {
        setProductIdToDelete(null); 
      }
    });
  };

  return <>
    <Table<ProductView> dataSource={products} rowKey="id">
      <Table.Column title="Название" dataIndex="name" key="name" />
      <Table.Column title="Артикул" dataIndex="article" key="article" />
      <Table.Column title="Минимальная цена" dataIndex="minimumCost" key="minimumCost" />
      <Table.Column title="Артикул" dataIndex="article" key="article" />
      <Table.Column title="Тип" dataIndex={['type', 'name']}
      key="typeName" />
      <Table.Column title="Материал" dataIndex={['material', 'name']}
      key="materialName" />
      <Table.Column title="Действия" render={(product) => (
        <div className={styles.actions}>
          <Button onClick={() => setProductIdToDelete(product.id)} danger>Удалить</Button>
          <Button onClick={() => navigate(`/edit-product/${product.id}`)}>Изменить</Button>
        </div>
      )} />
    </Table>
    <Modal open={Boolean(productIdToDelete)} 
      onCancel={() => setProductIdToDelete(null)}
      onOk={handleDelete}
      okText="Удалить"
      cancelText="Отмена"
      okButtonProps={{ danger: true }}
      confirmLoading={isPending}>
      <Title level={5}>Вы уверены что хотите удалить?</Title>
    </Modal>
  </>;
};