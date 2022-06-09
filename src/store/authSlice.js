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
          }
        ]
      },
      {
        id: 2,
        name: "author@test.ru",
        role: "author",
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
        ]
      },
      {
        id: 3,
        name: "test@test.ru",
        role: "tester",
        books: [
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
        ]
      },
      {
        id: 4,
        name: "test@test.ru",
        role: "tester",
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
