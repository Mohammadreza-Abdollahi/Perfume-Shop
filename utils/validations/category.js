export const validateCategory = (data) => {
  const { category_name, category_slug } = data;
  const nameRegex = /^[آ-ی\s]{1,30}$/;
  const slugRegex = /^[a-z]+(?:-[a-z]+)*$/;
  if (!category_name.trim()) {
    return "نام دسته بندی الزامی است.";
  }
  if (!nameRegex.test(category_name)) {
    return "دسته بندی تنها باید هاوی حروف فارسی باشد!";
  }
  if (!category_slug.trim()) {
    return "اسلاگ الزامی است.";
  }
  if (!slugRegex.test(category_slug)) {
    return "اسلاگ باید تنها هاوی حروف انگلیسی باشد!";
  }
  return null;
};
