import BrandForm from "@/components/admin/brands/BrandForm";
import { notFound } from "next/navigation";

const BrandEdit = async ({ params }) => {
  const { id } = await params;
  const brand = null;
  if (!category) notFound();
  return (
    <>
      <BrandForm brand={brand} />
    </>
  );
};

export default BrandEdit;
