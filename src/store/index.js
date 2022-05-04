import { configureStore } from "@reduxjs/toolkit";
import booksReaducer from "./booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReaducer
  }
});
