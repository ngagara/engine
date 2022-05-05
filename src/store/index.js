import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import supportReducer from "./supportSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    support: supportReducer
  }
});
