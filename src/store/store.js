
import { configureStore } from "@reduxjs/toolkit";
import appReducer from './reducers/appSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
