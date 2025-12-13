import { useCreateWorkshop } from "@/entities/workshop/model/hooks/useCreateWorkshop";
import { useUpdateWorkshop } from "@/entities/workshop/model/hooks/useUpdateWorkshop";
import { WorkshopDTO } from "@/entities/workshop/model/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, InputNumber } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { CreateWorkshopInput, createWorkshopSchema } from "../../model/validation";

interface WorkshopFormProps {
  workshop?: WorkshopDTO;
}

export const WorkshopForm = ({ workshop }: WorkshopFormProps) => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateWorkshopInput>({
    resolver: zodResolver(createWorkshopSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      numberWorkers: 0,
      type: "",
    },
  });

  const { mutate: createWorkshop, isPending: isCreating } = useCreateWorkshop();
  const { mutate: updateWorkshop, isPending: isUpdating } = useUpdateWorkshop();

  useEffect(() => {
    if (workshop) {
      reset({
        name: workshop.name,
        numberWorkers: workshop.numberWorkers,
        type: workshop.type,
      });
    }
  }, [workshop, reset]);

  const onSubmit = (data: CreateWorkshopInput) => {
    if (workshop) {
      updateWorkshop(
        { id: workshop.id, data },
        {
          onSuccess: () => {
            navigate("/workshops");
          },
        }
      );
    } else {
      createWorkshop(data, {
        onSuccess: () => {
          reset();
          navigate("/workshops");
        },
      });
    }
  };

  const isPending = isCreating || isUpdating;

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <h2>{workshop ? "Редактирование цеха" : "Создание цеха"}</h2>

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
              placeholder="Введите название цеха"
              maxLength={100}
              status={errors.name ? "error" : ""}
            />
          )}
        />
      </Form.Item>

      <Form.Item
        label="Количество сотрудников"
        validateStatus={errors.numberWorkers ? "error" : ""}
        help={errors.numberWorkers?.message}
      >
        <Controller
          name="numberWorkers"
          control={control}
          render={({ field }) => (
            <InputNumber
              {...field}
              min={0}
              style={{ width: "100%" }}
              placeholder="0"
              status={errors.numberWorkers ? "error" : ""}
            />
          )}
        />
      </Form.Item>
      
      <Form.Item
        label="Тип цеха"
        validateStatus={errors.type ? "error" : ""}
        help={errors.type?.message}
      >
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              min={1}
              style={{ width: "100%" }}
              placeholder="Введите тип"
              status={errors.type ? "error" : ""}
            />
          )}
        />
      </Form.Item>

      <Form.Item>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button onClick={() => navigate("/workshops")}>Отмена</Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={isPending}
            disabled={!isValid}
          >
            {workshop ? "Сохранить" : "Создать"}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
