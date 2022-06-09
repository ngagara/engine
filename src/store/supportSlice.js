import { createSlice } from "@reduxjs/toolkit";

const supportSlice = createSlice({
  name: "support",
  initialState: {
    modals: {
      delete_image: false,
      delete_book: false,
      delete_sound: false,
      delete_paragraphs: false,
      add_user: false,
      delete_user: false,
      edit_user: false,
      login: false
    }
  },
  reducers: {
    toggleModal(state, action) {
      state.modals[action.payload] = !state.modals[action.payload];
    }
  }
});

export const { toggleModal } = supportSlice.actions;
export default supportSlice.reducer;
