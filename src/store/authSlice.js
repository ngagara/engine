import { createSlice } from "@reduxjs/toolkit";

const supportSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: null,
      name: null,
      role: null,
      password: null,
      books: []
    },
    users: [
      {
        id: 1,
        name: "admin@test.ru",
        role: "admin",
        password: "123",
        books: ["Книга 1", "Книга 2"]
      },
      {
        id: 2,
        name: "author@test.ru",
        role: "author",
        password: "123",
        books: ["Книга 1", "Книга 2", "Книга 3", "Книга 4"]
      },
      {
        id: 3,
        name: "test@test.ru",
        role: "tester",
        password: "123",
        books: ["Книга 5", "Книга 6", "Книга 7"]
      },
      {
        id: 4,
        name: "test@test.ru",
        role: "tester",
        password: "123",
        books: []
      }
    ]
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    }
  }
});

export const { setUser } = supportSlice.actions;
export default supportSlice.reducer;
