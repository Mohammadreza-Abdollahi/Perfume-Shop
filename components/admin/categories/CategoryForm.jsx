"use client";

import { validateCategory } from "@/utils/validations/category";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CategoryForm = ({ category }) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    data.category_active = data.category_active === "on" ? 1 : 0;
    
    const err = validateCategory(data);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    if (category) {
      const res = await fetch(`/api/categories/${category.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      if (!res.ok) {
        setError(response.message);
        return;
      }
      router.replace("/admin/categories");
    } else {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      if (!res.ok) {
        setError(response.message);
        return;
      }
      router.replace("/admin/categories");
    }
  };
  return (
    <>
      <form className="px-10 pt-3" onSubmit={handleSubmit}>
        <section className="pb-3">
          {error ? (
            <span
              className={`${
                error ? "opacity-100" : "opacity-0"
              } flex items-center gap-2 text-red-500 text-sm`}
            >
              <FontAwesomeIcon icon={faCircleExclamation} />
              {error}
            </span>
          ) : (
            <span className="block text-start text-slate-600 mb-3">
              برای افزودن دسته بندی فیلد های زیر را کامل کنید.
            </span>
          )}
        </section>
        <section className="flex gap-10">
          <div className="relative w-full">
            <label
              htmlFor="name"
              className="absolute right-4 -top-2.5 bg-white px-1 text-sm font-medium text-gray-500"
            >
              نام دسته‌بندی
            </label>
            <input
              defaultValue={category?.name ?? ""}
              id="name"
              name="category_name"
              type="text"
              placeholder="برای مثال مردانه"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-slate-800 focus:border-first/50 focus:outline-none"
            />
          </div>
          <div className="relative w-full">
            <label
              htmlFor="slug"
              className="absolute right-4 -top-2.5 bg-white px-1 text-sm font-medium text-gray-500"
            >
              اسلاگ
            </label>
            <input
              defaultValue={category?.slug ?? ""}
              id="slug"
              name="category_slug"
              type="text"
              placeholder="برای مثال mens"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-slate-800 focus:border-first/50 focus:outline-none"
            />
          </div>
        </section>
        <section className="my-10">
          <div className="w-full flex items-center gap-2">
            <input
              defaultChecked={category?.is_active === 1 ? true : false ?? ""}
              id="category_active"
              name="category_active"
              type="checkbox"
              className="w-5 h-5 accent-first"
            />
            <label
              htmlFor="category_active"
              className="text-slate-700 select-none"
            >
              پس از افزودن دسته بندی به حالت فعال در آید.
            </label>
          </div>
        </section>
        <section className="mt-5">
          <button
            type="submit"
            className="block w-full py-3 px-4 bg-first hover:bg-orange-800 text-white rounded-xl cursor-pointer transition-all duration-150"
          >
            {category ? "ویرایش دسته بندی" : "ایجاد دسته بندی"}
          </button>
        </section>
      </form>
    </>
  );
};

export default CategoryForm;
