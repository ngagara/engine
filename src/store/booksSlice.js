import {
  createSlice
} from "@reduxjs/toolkit";
import {
  NEW_BOOK
} from "../constants";

const booksSlice = createSlice({
  name: "books",
  initialState: [
    {
    id: 1,
    name: "Преступный маг",
    src: "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
],
  reducers: {
    setNewBooks(state) {
      if (state.length === 0) {
        let prevId = state[state.length - 1].id;
        state.push({
          ...NEW_BOOK,
          id: (prevId += 1)
        })
      } else {
        state.push(NEW_BOOK)

      }
    }
  }
});

export const {
  setNewBooks
} = booksSlice.actions;
export default booksSlice.reducer;