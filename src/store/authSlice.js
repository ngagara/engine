import { createSlice } from "@reduxjs/toolkit";

const supportSlice = createSlice({
  name: "auth",
  initialState: {
    users: [
      {
        id: 1,
        name: "admin@test.ru",
        role: "admin",
        books: ["Преступный Маг", "Не маг", "Маг но не приступный"]
      },
      {
        id: 2,
        name: "author@test.ru",
        role: "author",
        books: ["Преступный Маг", "Маг", "Не маг но приступный"]
      },
      {
        id: 3,
        name: "test@test.ru",
        role: "tester",
        books: ["Преступный Маг", "Не маг"]
      }
    ]
  },
  reducers: {
    setUser(state, action) {}
  }
});

export const { setUser } = supportSlice.actions;
export default supportSlice.reducer;
