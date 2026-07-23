"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertToPersianDigits } from "@/utils/converToPersianDigits";

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);
  const loadCategories = async () => {
    const res = await fetch("/api/categories");

    const data = await res.json();

    setCategories(data.data);
    console.log(data);
  };
  const handleDelete = async (id) => {
    const res = await fetch(`/api/categories/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (res.ok) {
      loadCategories();
    }

    alert(data.message);
  };
  useEffect(() => {
    loadCategories();
  }, []);
  return (
    <>
      <section>
        <div className="w-full mx-auto flex items-center justify-between gap-5 my-4">
          <div className="relative flex-10/12">
            <label
              htmlFor="search"
              className="absolute right-4 -top-2.5 bg-white px-1 text-sm font-medium text-gray-500"
            >
              جستجو
            </label>
            <input
              id="search"
              type="text"
              placeholder="جستجو کنید..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-slate-800 focus:border-first/50 focus:outline-none"
            />
          </div>
          <Link className="flex-2/12" href={"/admin/categories/create"}>
            <button className="w-full bg-first hover:bg-orange-800 cursor-pointer text-white px-4 py-3 hover:bg-pal3-600 rounded-sm transition-all duration-150">
              افزودن <FontAwesomeIcon className="align-middle" icon={faPlus} />
            </button>
          </Link>
        </div>
        {categories.length > 0 ? (
          <table className="w-full">
            <thead className="text-center">
              <tr className="border-b-2 border-pal1-500 pb-5">
                <th className="w-1/12 pb-4">#</th>
                <th className="w-3/12 pb-4">عنوان دسته بندی</th>
                <th className="w-2/12 pb-4">اسلاگ</th>
                <th className="w-2/12 pb-4">تاریخ ایجاد</th>
                <th className="w-2/12 pb-4">تاریخ ویرایش</th>
                <th className="w-1/12 pb-4">وضعیت</th>
                <th className="w-1/12 pb-4">عملیات</th>
              </tr>
            </thead>
            <tbody className="text-center text-lg">
              {categories.map((item, index) => (
                <tr
                  key={index}
                  className="align-middle text-base border-b-2 border-first/50 even:bg-first/10 hover:bg-first/15 transition-all duration-75"
                >
                  <td className="py-3">{convertToPersianDigits(index + 1)}</td>

                  <td className="py-3">
                    <span className="line-clamp-1">{item.name}</span>
                  </td>
                  <td className="py-3">{item.slug}</td>
                  <td className="py-3">{item.created_at}</td>
                  <td className="py-3">{item.updated_at}</td>
                  <td
                    className={`py-3 ${
                      item.is_active ? "bg-green-200" : "bg-red-200"
                    }`}
                  >
                    {item.is_active ? "فعال" : "غیر فعال"}
                  </td>
                  <td>
                    <Link href={`/admin/categories/${item.id}/edit`}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="text-xl text-yellow-500 mx-1.5"
                      />
                    </Link>
                    <FontAwesomeIcon
                      onClick={() => handleDelete(item.id)}
                      icon={faTrash}
                      className="text-xl text-red-500 mx-1.5 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <span className="block py-3 text-center bg-red-100 text-red-800 rounded-lg">
            هیچ دسته بندی وجود ندارد!
          </span>
        )}
      </section>
    </>
  );
};

export default CategoryTable;
