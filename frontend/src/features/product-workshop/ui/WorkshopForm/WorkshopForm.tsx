import { useCreateProductWorkshop } from "@/entities/product-workshop/model/hooks/useCreateProductWorkshop";
import { useUpdateProductWorkshop } from "@/entities/product-workshop/model/hooks/useUpdateProductWorkshop";
import { ProductWorkshopDTO } from "@/entities/product-workshop/model/types";
import { useWorkshops } from "@/entities/workshop/model/hooks/useWorkshops";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { CreateProductWorkshopInput, createProductWorkshopSchema } from "../../model/validation";

interface ProductWorkshopFormProps {
  productWorkshop?: ProductWorkshopDTO;
}

export const ProductWorkshopForm = ({ productWorkshop }: ProductWorkshopFormProps) => {
  const navigate = useNavigate();

  const { data: workshops = [], isLoading: isWorkshopsLoading } = useWorkshops();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateProductWorkshopInput>({
    resolver: zodResolver(createProductWorkshopSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      workshopId: undefined,
      productionTime: 0,
    },
  });

  const { mutate: createProductWorkshop, isPending: isCreating } = useCreateProductWorkshop();
  const { mutate: updateProductWorkshop, isPending: isUpdating } = useUpdateProductWorkshop();

  useEffect(() => {
    if (productWorkshop) {
      reset({
        name: productWorkshop.name,
        workshopId: productWorkshop.workshopId,
        productionTime: productWorkshop.productionTime,
      });
    }
  }, [productWorkshop, reset]);

  const onSubmit = (data: CreateProductWorkshopInput) => {
    if (productWorkshop) {
      updateProductWorkshop(
        { id: productWorkshop.id, data },
        {
          onSuccess: () => {
            navigate("/product-workshops");
          },
        }
      );
    } else {
      createProductWorkshop(data, {
        onSuccess: () => {
          reset();
          navigate("/product-workshops");
        },
      });
    }
  };

  const isPending = isCreating || isUpdating;

  const workshopOptions = workshops.map((w) => ({
    label: w.name,
    value: w.id,
  }));

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <h2>{productWorkshop ? "Редактирование этапа" : "Создание этапа производства"}</h2>

      <Form.Item
        label="Название этапа"
        validateStatus={errors.name ? "error" : ""}
        help={errors.name?.message}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Введите название этапа"
              maxLength={100}
              status={errors.name ? "error" : ""}
            />
          )}
        />
      </Form.Item>

      <Form.Item
        label="Цех"
        validateStatus={errors.workshopId ? "error" : ""}
        help={errors.workshopId?.message}
      >
        <Controller
          name="workshopId"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              placeholder="Выберите цех"
              options={workshopOptions}
              loading={isWorkshopsLoading}
              status={errors.workshopId ? "error" : ""}
              showSearch
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
            />
          )}
        />
      </Form.Item>

      <Form.Item
        label="Время производства (мин)"
        validateStatus={errors.productionTime ? "error" : ""}
        help={errors.productionTime?.message}
      >
        <Controller
          name="productionTime"
          control={control}
          render={({ field }) => (
            <InputNumber
              {...field}
              min={0}
              style={{ width: "100%" }}
              placeholder="0"
              status={errors.productionTime ? "error" : ""}
            />
          )}
        />
      </Form.Item>

      <Form.Item>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button onClick={() => navigate("/product-workshops")}>Отмена</Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={isPending}
            disabled={!isValid}
          >
            {productWorkshop ? "Сохранить" : "Создать"}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
