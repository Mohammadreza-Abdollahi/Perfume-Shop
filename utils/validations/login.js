export const validateLogin = (data) => {
  const { phone, password } = data;
  const phoneRegex = /^09\d{9}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!phone.trim()) {
    return "شماره تلفن الزامی است.";
  }
  if (!phoneRegex.test(phone)) {
    return "شماره تلفن نامعتبر است!";
  }
  if (!password.trim()) {
    return "رمز عبور الزامی است.";
  }
  if (!passwordRegex.test(password)) {
    return "رمز عبور باید حداقل ۸ کاراکتر و شامل حداقل یک حرف و یک عدد باشد!";
  }
  return null;
};
