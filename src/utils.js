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

export const getAvailableBooks = (books) => {
  const maxBooks = 3;
  const available_book = [];
  const rest =
    books.length > maxBooks ? `и еще ${books.length - maxBooks}` : "";
  books.forEach((book, index) => {
    if (index < maxBooks) available_book.push(book.name);
  });
  return books.length
    ? `${available_book.join(", ")} ${rest}`
    : "Нет доступных книг";
};
