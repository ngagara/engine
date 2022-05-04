import { createSlice } from "@reduxjs/toolkit";
import { NEW_BOOK } from "../constants";

const booksSlice = createSlice({
  name: "books",
  initialState: [
    {
      id: 1,
      name: "Преступный маг",
      src:
        "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ],
  reducers: {
    setBook(state) {
      let prevId = state[state.length - 1].id;
      return [...state, { ...NEW_BOOK, id: (prevId += 1) }];
    }
    // setBooks(state, action) {
    //   state.email = action.payload.email;
    //   state.id = action.payload.id;
    //   state.token = action.payload.token;
    // },
    // setPaper(state) {
    //   state.email = null;
    //   state.token = null;
    //   state.id = null;
    // }
  }
});

export const { setBooks, setPaper } = booksSlice.actions;
export default booksSlice.reducer;
