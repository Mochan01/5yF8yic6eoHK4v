import { createSlice } from "@reduxjs/toolkit";

// Initial state.
const initialState = {
  color: "#ddd",
};

// Create a slice.
const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setColor(state, data){
      state.color = data.payload;
    },
  }
});

// Export a Reducer.
export default slice.reducer;

// Export Action Creators.
export const { setColor } = slice.actions;
