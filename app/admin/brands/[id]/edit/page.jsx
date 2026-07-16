import BrandForm from "@/components/admin/brands/BrandForm";
import { findById } from "@/services/brand.service";
import { notFound } from "next/navigation";

const BrandEdit = async ({ params }) => {
  const { id } = await params;
  const brand = await findById(id);
  if (!brand) notFound();
  return (
    <>
      <BrandForm brand={brand} />
    </>
  );
};

export default BrandEdit;
