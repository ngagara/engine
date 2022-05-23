import {
  createSlice
} from "@reduxjs/toolkit";

const supportSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    token: null,
    id: null
  },
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
  }
});

export const {
  setUser
} = supportSlice.actions;
export default supportSlice.reducer;