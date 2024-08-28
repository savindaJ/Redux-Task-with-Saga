import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    loading: false,
    error: null,
    sampleData: [
      { id: 1, title: "First" },
      { id: 2, title: "Second" },
      { id: 3, title: "Third" },
    ],
    count: 0,
  },
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  increment,
  decrement,
} = dataSlice.actions;
export default dataSlice.reducer;
