import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { knownCocktails: [], unknowncocktails: [] },
  reducers: {
    incrementKnowncocktails(state, action) {
      state.knownCocktails = [...state.knownCocktails, action.payload];
      
    },
    incrementUnknowncocktails() {},
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
