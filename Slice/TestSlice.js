import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const TestSlice = createSlice({
  name: "Test",
  initialState,
  reducers: {},
});

export const {} = TestSlice.actions;

export default TestSlice.reducer;
