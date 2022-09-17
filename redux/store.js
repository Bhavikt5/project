import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./reducers/reducer";

const store = configureStore({
  reducer: {
    title: customReducer,
  },
});

export default store;
