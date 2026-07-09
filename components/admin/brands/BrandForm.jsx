"use client";

import { validateCategory } from "@/utils/validations/category";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BrandForm = ({ brand }) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const err = validateCategory(data);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    if (brand) {
      const res = await fetch(`/api/brands/${brand.id}`, {
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
      router.replace("/admin/brands");
    } else {
      const res = await fetch("/api/brands", {
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
      router.replace("/admin/brands");
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
              برای افزودن برند فیلد های زیر را کامل کنید.
            </span>
          )}
        </section>
        <section className="flex gap-10">
          <div className="relative w-full">
            <label
              htmlFor="name"
              className="absolute right-4 -top-2.5 bg-white px-1 text-sm font-medium text-gray-500"
            >
              نام برند
            </label>
            <input
              id="name"
              name="category_name"
              type="text"
              placeholder="برای مثال Chanel"
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
              id="slug"
              name="category_slug"
              type="text"
              placeholder="برای مثال mens"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-slate-800 focus:border-first/50 focus:outline-none"
            />
          </div>
        </section>
        <section className="mt-5">
          <button
            type="submit"
            className="block w-full py-3 px-4 bg-first hover:bg-orange-800 text-white rounded-xl cursor-pointer transition-all duration-150"
          >
            {brand ? "ویرایش برند" : "ایجاد برند"}
          </button>
        </section>
      </form>
    </>
  );
};

export default BrandForm;
