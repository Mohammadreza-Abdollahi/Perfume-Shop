import AttributeForm from "@/components/admin/attributes/AttributeForm";
import { findById } from "@/services/attribute.service";
import { notFound } from "next/navigation";

const AttributeEdit = async ({ params }) => {
  const { id } = await params;
  const attribute = await findById(id);
  if (!attribute) notFound();
  return (
    <>
      <AttributeForm attribute={attribute} />
    </>
  );
};

export default AttributeEdit;
