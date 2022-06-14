import { createSlice } from "@reduxjs/toolkit";
import plug from "../img/plug.png";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books_collection: [],
    new_book: {
      id: 1,
      name: "Новая книга",
      image: plug
    },
    books: [
      {
        id: 1,
        name: "Книга 1",
        image:
          "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 2,
        name: "Книга 2",
        image:
          "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 3,
        name: "Книга 3",
        image:
          "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 4,
        name: "Книга 4",
        image:
          "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 5,
        name: "Книга 5",
        image:
          "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 6,
        name: "Книга 6",
        image:
          "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 7,
        name: "Книга 7",
        image:
          "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      }
    ],
    edit_book: {}
  },
  reducers: {
    //утанавливает новую книгу при первом рендере страницы
    setNewBook(state) {
      if (state.books.length === 0)
        state.books = [...state.books, state.new_book];
    },
    //устанавливает новую книгу при нажатии кнопки добавить
    addNewBook(state) {
      let prevId = state.books[state.books.length - 1].id;
      state.books = [
        ...state.books,
        {
          ...state.new_book,
          id: (prevId += 1)
        }
      ];
    },
    setEditBook(state, action) {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          state.edit_book = { ...book };
        }
      });
    },
    setBooksСollection(state) {
      let books_list = state.books.reduce((accum, book) => {
        accum.push(book.name);
        return accum;
      }, []);
      state.books_collection = books_list;
    }
  }
});

export const {
  setNewBook,
  addNewBook,
  setEditBook,
  setBooksСollection
} = booksSlice.actions;
export default booksSlice.reducer;
