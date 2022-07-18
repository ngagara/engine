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
    },
    toast: true
  },
  reducers: {
    toggleModal(state, action) {
      state.modals[action.payload] = !state.modals[action.payload];
    },
    showToast(state) {
      state.toast = true;
    },
    hideToast(state) {
      state.toast = false;
    }
  }
});

export const { toggleModal, showToast, hideToast } = supportSlice.actions;
export default supportSlice.reducer;
