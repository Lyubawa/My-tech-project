import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./camperOperation";

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

// export const { deposit } = slice.actions;

export default slice.reducer;

// export const camperReducer = (state, action) => {
//   switch (action.type) {
//     case :
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const deposit = (value) => {
//   return {
//     type: "camper/deposit",
//     payload: value,
//   };
// };
