import { ProductView } from "@/entities/product/model/types";
import { Table } from "antd";
import { ProductsTableProps } from "./ProductsTable.props";

export const ProductsTable = ({ products }: ProductsTableProps) => {
  return <Table<ProductView> dataSource={products} rowKey="id">
    <Table.Column title="Название" dataIndex="name" key="name" />
    <Table.Column title="Артикул" dataIndex="article" key="article" />
    <Table.Column title="Минимальная цена" dataIndex="minimumCost" key="minimumCost" />
    <Table.Column title="Артикул" dataIndex="article" key="article" />
    <Table.Column title="Тип" dataIndex={['type', 'name']}
    key="typeName" />
    <Table.Column title="Материал" dataIndex={['material', 'name']}
    key="materialName" />
  </Table>;
};