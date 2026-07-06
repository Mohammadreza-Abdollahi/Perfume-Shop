import CategoryTable from "@/components/admin/categories/CategoryTable";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const AdminCategories = () => {
  return (
    <>
      <section>
        <div className="w-full flex justify-end mb-3">
          <Link className="align-middle" href={"/admin/categories/create"}>
            <button className="bg-first hover:bg-orange-800 cursor-pointer text-white px-8 py-1 hover:bg-pal3-600 rounded-sm text-lg transition-all duration-150">
              افزودن <FontAwesomeIcon className="align-middle" icon={faPlus} />
            </button>
          </Link>
        </div>
        <CategoryTable/>
      </section>
    </>
  );
};

export default AdminCategories;
