export const validateRegister = (data) => {
  const { first_name, last_name, phone, password, confirm_password } = data;
  const namesRegex = /^[\u0600-\u06FF\s]{3,}$/;
  const phoneRegex = /^09\d{9}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!phone.trim()) {
    return "شماره تلفن الزامی است.";
  }
  if (!phoneRegex.test(phone)) {
    return "شماره تلفن نامعتبر است!";
  }
  if (!first_name.trim()) {
    return "نام الزامی است.";
  }
  if (!namesRegex.test(first_name)) {
    return "نام نامعتبر است!";
  }
  if (!last_name.trim()) {
    return "نام خانوادگی الزامی است.";
  }
  if (!namesRegex.test(last_name)) {
    return "نام خانوادگی نامعتبر است!";
  }
  if (!password.trim()) {
    return "رمز عبور الزامی است.";
  }
  if (!confirm_password.trim()) {
    return "تکرار رمز عبور الزامی است.";
  }
  if (!passwordRegex.test(password)) {
    return "رمز عبور باید حداقل ۸ کاراکتر و شامل حداقل یک حرف و یک عدد باشد!";
  }
  if (password !== confirm_password) {
    return "رمز عبور با تکرار ان مطابقت ندارد!";
  }
  return null;
};
