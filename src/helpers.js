import generator from "generate-password";

export const passwordGenerate = (cb, value) => {
  const password = generator.generate({
    length: 6,
    numbers: true,
    uppercase: false
  });
  cb(value, password);
};

export const setDefaultRole = (role) => {
  switch (role) {
    case "admin":
      return "Администратор";
    case "tester":
      return "Тестировщик";
    case "author":
      return "Автор";
    default:
      return "-";
  }
};
