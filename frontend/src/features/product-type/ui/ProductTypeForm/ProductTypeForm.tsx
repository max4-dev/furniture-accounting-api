import { useCreateProductType } from "@/entities/product-type/model/hooks/useCreateProductType";
import { useUpdateProductType } from "@/entities/product-type/model/hooks/useUpdateProductType";
import { ProductTypeDTO } from "@/entities/product-type/model/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, InputNumber } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { CreateProductTypeInput, createProductTypeSchema } from "../../model/validation";

interface ProductTypeFormProps {
  productType?: ProductTypeDTO;
}

export const ProductTypeForm = ({ productType }: ProductTypeFormProps) => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateProductTypeInput>({
    resolver: zodResolver(createProductTypeSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      coefficient: 0,
    },
  });

  const { mutate: createProductType, isPending: isCreating } = useCreateProductType();
  const { mutate: updateProductType, isPending: isUpdating } = useUpdateProductType();

  useEffect(() => {
    if (productType) {
      reset({
        name: productType.name,
        coefficient: productType.coefficient,
      });
    }
  }, [productType, reset]);

  const onSubmit = (data: CreateProductTypeInput) => {
    if (productType) {
      updateProductType(
        { id: productType.id, data },
        {
          onSuccess: () => {
            navigate("/product-types");
          },
        }
      );
    } else {
      createProductType(data, {
        onSuccess: () => {
          reset();
          navigate("/product-types");
        },
      });
    }
  };

  const isPending = isCreating || isUpdating;

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <h2>{productType ? "Редактирование типа" : "Создание типа"}</h2>

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
              placeholder="Введите название"
              maxLength={100}
              status={errors.name ? "error" : ""}
            />
          )}
        />
      </Form.Item>

      <Form.Item
        label="Коэффициент"
        validateStatus={errors.coefficient ? "error" : ""}
        help={errors.coefficient?.message}
      >
        <Controller
          name="coefficient"
          control={control}
          render={({ field }) => (
            <InputNumber
              {...field}
              min={0}
              max={100}
              style={{ width: "100%" }}
              status={errors.coefficient ? "error" : ""}
            />
          )}
        />
      </Form.Item>

      <Form.Item>
        <div>
          <Button
            type="primary"
            htmlType="submit"
            loading={isPending}
            disabled={!isValid}
          >
            {productType ? "Сохранить" : "Создать"}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
