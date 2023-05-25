import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { knownCocktails: [], unknownCocktails: [] },
  reducers: {
    incrementKnownCocktails(state, action) {
      const controlArray = state.knownCocktails.filter((cocktail) => {
        return cocktail.idDrink === action.payload.idDrink;
      });
      if (controlArray.length === 0) {
        state.knownCocktails = [...state.knownCocktails, action.payload];
      }
    },
    incrementUnknownCocktails(state, action) {
      const controlArray = state.unknownCocktails.filter((cocktail) => {
        return cocktail.id === action.payload.idDrink;
      });
      if (controlArray.length === 0) {
        state.unknownCocktails = [...state.unknownCocktails, action.payload];
      }
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
