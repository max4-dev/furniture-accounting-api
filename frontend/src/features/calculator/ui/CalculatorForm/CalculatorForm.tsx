import { useMaterials } from "@/entities/material/model";
import { useProductTypes } from "@/entities/product-type/model";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Col, Form, InputNumber, Row, Select, Statistic, Typography } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useCalculateRawMaterial } from "../../model/hooks/useCalculateRawMaterial";
import { CalculationResponseDTO } from "../../model/types";
import { CalculatorInput, calculatorSchema } from "../../model/validation";

const { Title } = Typography;

export const CalculatorForm = () => {
  const [result, setResult] = useState<CalculationResponseDTO | null>(null);

  const { data: materials = [], isLoading: isMaterialsLoading } = useMaterials();
  const { data: productTypes = [], isLoading: isTypesLoading } = useProductTypes();

  const { mutate: calculate, isPending } = useCalculateRawMaterial();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CalculatorInput>({
    resolver: zodResolver(calculatorSchema),
    mode: "onBlur",
    defaultValues: {
      quantity: 1,
      length: 0,
      width: 0,
    },
  });

  const onSubmit = (data: CalculatorInput) => {
    calculate(data, {
      onSuccess: (res) => {
        setResult(res);
      },
    });
  };

  const materialOptions = materials.map((m) => ({ label: m.name, value: m.id }));
  const typeOptions = productTypes.map((t) => ({ label: t.name, value: t.id }));

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <Title level={2}>Калькулятор сырья</Title>
      
      <Card>
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Тип продукции"
                validateStatus={errors.productTypeId ? "error" : ""}
                help={errors.productTypeId?.message}
              >
                <Controller
                  name="productTypeId"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder="Выберите тип"
                      options={typeOptions}
                      loading={isTypesLoading}
                      status={errors.productTypeId ? "error" : ""}
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
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
                      options={materialOptions}
                      loading={isMaterialsLoading}
                      status={errors.materialId ? "error" : ""}
                    />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Длина (м/мм)"
                validateStatus={errors.length ? "error" : ""}
                help={errors.length?.message}
              >
                <Controller
                  name="length"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      {...field}
                      min={0}
                      style={{ width: "100%" }}
                      status={errors.length ? "error" : ""}
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Ширина (м/мм)"
                validateStatus={errors.width ? "error" : ""}
                help={errors.width?.message}
              >
                <Controller
                  name="width"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      {...field}
                      min={0}
                      style={{ width: "100%" }}
                      status={errors.width ? "error" : ""}
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Количество (шт)"
                validateStatus={errors.quantity ? "error" : ""}
                help={errors.quantity?.message}
              >
                <Controller
                  name="quantity"
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      {...field}
                      min={1}
                      style={{ width: "100%" }}
                      status={errors.quantity ? "error" : ""}
                    />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Button type="primary" htmlType="submit" loading={isPending} block size="large">
            Рассчитать
          </Button>
        </Form>
      </Card>

      {result && (
        <Card style={{ marginTop: 24, background: '#f6ffed', borderColor: '#b7eb8f' }} title="Результаты расчета">
          <Row gutter={16}>
            <Col span={6}>
              <Statistic 
                title="Необходимо сырья" 
                value={result.requiredRawMaterial} 
                valueStyle={{ color: '#3f8600', fontWeight: 'bold' }} 
              />
            </Col>
            <Col span={6}>
              <Statistic title="Без учета потерь" value={result.originalAmount} />
            </Col>
            <Col span={6}>
              <Statistic title="% потерь" value={result.wastePercent} suffix="%" />
            </Col>
            <Col span={6}>
              <Statistic title="Точное значение" value={result.finalAmount} precision={2} />
            </Col>
          </Row>
        </Card>
      )}
    </div>
  );
};