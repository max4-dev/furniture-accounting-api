import { useUpdateProduct } from "@/entities/product/model/hooks/useUpdateProduct";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { CreateProductInput, createProductSchema } from "../../model/validation";
import styles from "./EditProductForm.module.css";
import { EditProductFormProps } from "./EditProductForm.props";

export const EditProductForm = ({
  product,
  materials = [],
  types = [],
}: EditProductFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateProductInput>({
    resolver: zodResolver(createProductSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      article: "",
      minimumCost: 0,
      typeId: undefined,
      materialId: undefined,
    },
  });

  const { mutate: updateProduct, isPending } = useUpdateProduct();

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        article: product.article,
        minimumCost: product.minimumCost,
        typeId: product.type.id,
        materialId: product.material.id,
      });
    }
  }, [product, reset]);

  const onSubmit = (data: CreateProductInput) => {
    updateProduct(
      { id: product.id, data },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <Form.Item
        label="Название"
        validateStatus={errors.name ? "error" : ""}
        help={errors.name?.message}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Введите название продукта"
              maxLength={100}
              status={errors.name ? "error" : ""}
            />
          )}
        />
      </Form.Item>

      <Form.Item
        label="Артикул"
        validateStatus={errors.article ? "error" : ""}
        help={errors.article?.message}
      >
        <Controller
          name="article"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Введите артикул"
              maxLength={50}
              status={errors.article ? "error" : ""}
            />
          )}
        />
      </Form.Item>

      <Form.Item
        label="Минимальная цена"
        validateStatus={errors.minimumCost ? "error" : ""}
        help={errors.minimumCost?.message}
      >
        <Controller
          name="minimumCost"
          control={control}
          render={({ field }) => (
            <InputNumber
              {...field}
              min={0}
              max={1000000}
              placeholder="0"
              style={{ width: "100%" }}
              status={errors.minimumCost ? "error" : ""}
            />
          )}
        />
      </Form.Item>

      <Form.Item
        label="Тип"
        validateStatus={errors.typeId ? "error" : ""}
        help={errors.typeId?.message}
      >
        <Controller
          name="typeId"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              placeholder="Выберите тип"
              options={types.map((t) => ({ label: t.name, value: t.id }))}
              status={errors.typeId ? "error" : ""}
            />
          )}
        />
      </Form.Item>

      <Form.Item
        label="Материал"
        validateStatus={errors.materialId ? "error" : ""}
        help={errors.materialId?.message}
      >
        <Controller
          name="materialId"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              placeholder="Выберите материал"
              options={materials.map((m) => ({ label: m.name, value: m.id }))}
              status={errors.materialId ? "error" : ""}
            />
          )}
        />
      </Form.Item>

      <Form.Item>
        <div className={styles.actions}>
          <Button onClick={() => reset()}>Отмена</Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={isPending}
            disabled={!isValid}
          >
            Сохранить
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
