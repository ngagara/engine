import {
  createSlice
} from "@reduxjs/toolkit";

const supportSlice = createSlice({
  name: "support",
  initialState: {
    modalActive: false
  },
  reducers: {
    setModalActive(state, action) {
      state.modalActive = action.payload.active;
    },
  }
});

export const {
  setModalActive,
} = supportSlice.actions;
export default supportSlice.reducer;