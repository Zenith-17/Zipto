// slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    clearLocation: (state) => {
      state.location = null;
    },
  },
});

export const { setLocation, clearLocation } = appSlice.actions;
export default appSlice.reducer;
