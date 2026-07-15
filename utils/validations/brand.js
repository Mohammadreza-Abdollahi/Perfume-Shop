export const validateBrand = (data) => {
  const {
    brand_name,
    brand_slug,
    brand_country,
    brand_description,
    brand_active,
  } = data;

  const is_active = brand_active === "on" ? 1 : 0;

  const nameRegex = /^[A-Za-zآ-ی\s]{2,150}$/;
  const slugRegex = /^(?=.{1,150}$)[a-z]+(?:-[a-z]+)*$/;
  const countryRegex = /^[آ-ی\s]{2,120}$/;
  const descriptionRegex = /^[A-Za-zآ-ی0-9۰-۹\s.,،!؟?:؛'"()\-_/\\\n]{0,1000}$/;
  const isActiveRegex = /^(0|1)$/;
  if (!brand_name.trim()) {
    return "نام برند الزامی است.";
  }
  if (!nameRegex.test(brand_name)) {
    return "برند تنها باید هاوی حروف فارسی و انگلیسی باشد!";
  }
  if (!brand_slug.trim()) {
    return "اسلاگ الزامی است.";
  }
  if (!slugRegex.test(brand_slug)) {
    return "اسلاگ باید تنها هاوی حروف انگلیسی باشد!";
  }
  if (!brand_country.trim()) {
    return "کشور الزامی است.";
  }
  if (!countryRegex.test(brand_country)) {
    return "کشور باید تنها هاوی حروف فارسی باشد!";
  }
  if (!brand_description.trim()) {
    return "توضیحات الزامی است.";
  }
  if (!descriptionRegex.test(brand_description)) {
    return "توضیحات باید هاوی حروف فارسی و انگلیسی و زیر 1000 کاراکتر باشد!";
  }
  if (!isActiveRegex.test(is_active)) {
    return "وضعیت برند نامعتبر است";
  }
  return null;
};
