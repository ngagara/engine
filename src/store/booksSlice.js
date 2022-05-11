import { createSlice } from "@reduxjs/toolkit";
import plug from "../img/plug.png";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    // вынести в константу
    new_book: {
      id: 1,
      name: "Новая книга",
      src: plug
    },
    books: [
      {
        id: 1,
        name: "Преступный маг",
        src:
          "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 2,
        name: "Непреступный маг",
        src:
          "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      }
    ],
    edit_book: {}
  },
  reducers: {
    //утанавливает новую книгу при первом рендере страницы
    setNewBook(state) {
      if (state.books.length === 0) state.books.push(state.new_book);
    },
    //устанавливает новую книгу при нажатии кнопки добавить
    addNewBook(state) {
      let prevId = state.books[state.books.length - 1].id;
      state.books.push({
        ...state.new_book,
        id: (prevId += 1)
      });
    },
    setEditBook(state, action) {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          state.edit_book = { ...book };
        }
      });
    }
  }
});

export const { setNewBook, addNewBook, setEditBook } = booksSlice.actions;
export default booksSlice.reducer;
