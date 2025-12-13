import { useWorkshopById } from "@/entities/workshop/model/hooks/useWorkshopById";
import { WorkshopForm } from "@/features/workshop/ui/WorkshopForm/WorkshopForm";
import { useParams } from "react-router";

export const EditWorkshopPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: workshop } = useWorkshopById(id);

  if (!workshop) {
    return null;
  }

  return <WorkshopForm workshop={workshop} />;
};
