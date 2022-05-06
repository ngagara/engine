import { createSlice } from "@reduxjs/toolkit";
// временное решение пока нет нормально авторизации
const supportSlice = createSlice({
  name: "auth",
  initialState: {
    login: false,
    password: "123123"
  },
  reducers: {
    setLogin(state, action) {
      if (state.password === action.payload) state.login = true;
    }
  }
});

export const { setLogin } = supportSlice.actions;
export default supportSlice.reducer;
