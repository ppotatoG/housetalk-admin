import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ModalState[] = [];

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ModalState>) => {
      state.push(action.payload);
    },
    closeModal: (state, action: PayloadAction<string>) => {
      const index = state.findIndex(modal => modal.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    closeAllModals: () => {
      return [];
    },
  },
});

export const { showModal, closeModal, closeAllModals } = modalSlice.actions;
export default modalSlice.reducer;
