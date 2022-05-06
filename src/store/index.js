import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import supportReducer from "./supportSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    support: supportReducer,
    auth: authReducer
  }
});
