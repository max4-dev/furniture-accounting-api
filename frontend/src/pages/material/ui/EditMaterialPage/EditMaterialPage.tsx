import { useMaterialById } from "@/entities/material/model";
import { MaterialForm } from "@/features/material/ui/MaterialForm/MaterialForm";
import { useParams } from "react-router";

export const EditMaterialPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: material } = useMaterialById(id);

  if (!material) {
    return null;
  }

  return <MaterialForm material={material} />;
};
