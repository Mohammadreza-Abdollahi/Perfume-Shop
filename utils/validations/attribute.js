export const validateAttribute = ({ attribute_name, attribute_slug }) => {
  const nameRegex = /^[آ-ی\s]{1,30}$/;
  const slugRegex = /^[a-z]+(?:-[a-z]+)*$/;
  if (!attribute_name.trim()) {
    return "نام ویژگی الزامی است.";
  }
  if (!nameRegex.test(attribute_name)) {
    return "نام ویژگی تنها باید هاوی حروف فارسی باشد!";
  }
  if (!attribute_slug.trim()) {
    return "اسلاگ الزامی است.";
  }
  if (!slugRegex.test(attribute_slug)) {
    return "اسلاگ باید تنها هاوی حروف انگلیسی باشد!";
  }
  return null;
};
