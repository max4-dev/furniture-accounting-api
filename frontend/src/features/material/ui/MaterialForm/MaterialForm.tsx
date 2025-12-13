import { useCreateMaterial } from "@/entities/material/model/hooks/useCreateMaterial";
import { useUpdateMaterial } from "@/entities/material/model/hooks/useUpdateMaterial";
import { MaterialDTO } from "@/entities/material/model/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, InputNumber } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { CreateMaterialInput, createMaterialSchema } from "../../model/validation";


interface MaterialFormProps {
  material?: MaterialDTO;
}

export const MaterialForm = ({ material }: MaterialFormProps) => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateMaterialInput>({
    resolver: zodResolver(createMaterialSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      missingPercent: 0,
    },
  });

  const { mutate: createMaterial, isPending: isCreating } = useCreateMaterial();
  const { mutate: updateMaterial, isPending: isUpdating } = useUpdateMaterial();

  useEffect(() => {
    if (material) {
      reset({
        name: material.name,
        missingPercent: material.missingPercent,
      });
    }
  }, [material, reset]);

  const onSubmit = (data: CreateMaterialInput) => {
    if (material) {
      updateMaterial(
        { id: material.id, data },
        {
          onSuccess: () => {
            navigate("/materials");
          },
        }
      );
    } else {
      createMaterial(data, {
        onSuccess: () => {
          reset();
          navigate("/materials");
        },
      });
    }
  };

  const isPending = isCreating || isUpdating;

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <h2>{material ? "Редактирование материала" : "Создание материала"}</h2>

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
        label="Процент потерь"
        validateStatus={errors.missingPercent ? "error" : ""}
        help={errors.missingPercent?.message}
      >
        <Controller
          name="missingPercent"
          control={control}
          render={({ field }) => (
            <InputNumber
              {...field}
              min={0}
              max={100}
              style={{ width: "100%" }}
              placeholder="0"
              status={errors.missingPercent ? "error" : ""}
            />
          )}
        />
      </Form.Item>

      <Form.Item>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button onClick={() => navigate("/materials")}>Отмена</Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={isPending}
            disabled={!isValid}
          >
            {material ? "Сохранить" : "Создать"}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
