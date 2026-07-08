import CategoryForm from "@/components/admin/categories/CategoryForm";
import { findById } from "@/services/category.service";
import { notFound } from "next/navigation";

const ProductEdit = async ({ params }) => {
  const { id } = await params;
  const category = await findById(id);
  if (!category) notFound();
  return (
    <>
      <CategoryForm category={category} />
    </>
  );
};

export default ProductEdit;
