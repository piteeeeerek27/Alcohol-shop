import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DrinksState {
	drinks: string[];
}

export const initialState: DrinksState = {
	drinks: [
		"coca cola",
		"pepsi ",
		"sprite ",
		"frugo ",
		"żubrówka ",
		"Stock ",
		"kinder bueno",
		"sok pomarańczowy ",
		"papierosy ",
		"sprite zero ",
		"pepsi zero",
	],
};

const drinksSlice = createSlice({
	name: "drinksSlice",
	initialState,
	reducers: {
		// addDrink: (state: {drinks:string[]}, action: PayloadAction<string>) => {
		// 	// Dodać nowy napój do tablicy
		// 	state.drinks.push(action.payload);
		//   },

		addDrinks: (state, action: PayloadAction<string[]>) => {
			// Zastąp całą tablicę nowymi napojami
			state.drinks = action.payload;
		},

		allDrinks: (state: DrinksState) => {
			state.drinks = initialState.drinks;
		},

		resetState: (state: DrinksState) => {
			state.drinks = [];
		},
	},
});

export const { addDrinks, allDrinks, resetState } = drinksSlice.actions;

// Selektor
export const selectDrinks = (state: { drinks: DrinksState }) =>
	state.drinks.drinks;

// Reducer
export default drinksSlice.reducer;
