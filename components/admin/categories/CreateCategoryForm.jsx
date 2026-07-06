const CreateCategoryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    
  };
  return (
    <>
      <form className="px-10 pt-5" onSubmit={handleSubmit}>
        <section className="flex gap-10">
          <div className="relative w-full">
            <label
              htmlFor="name"
              className="absolute right-4 -top-2.5 bg-white px-1 text-sm font-medium text-gray-500"
            >
              نام دسته‌بندی
            </label>
            <input
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
            ایجاد دسته بندی
          </button>
        </section>
      </form>
    </>
  );
};

export default CreateCategoryForm;
