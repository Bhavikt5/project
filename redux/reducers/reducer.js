import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  title: "orders",
};

export const customReducer = createReducer(initialState, {
  getTitle: (state, action) => {
    state.title = action.payload;
  },
});
