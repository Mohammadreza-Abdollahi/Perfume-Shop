export const validateCategory = ({
  category_name,
  category_slug,
  brand_active,
}) => {
  const is_active = brand_active === "on" ? 1 : 0;
  const nameRegex = /^[آ-ی\s]{1,30}$/;
  const slugRegex = /^[a-z]+(?:-[a-z]+)*$/;
  const isActiveRegex = /^(0|1)$/;
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
  if (!isActiveRegex.test(is_active)) {
    return "وضعیت دسته بندی نامعتبر است";
  }
  return null;
};
