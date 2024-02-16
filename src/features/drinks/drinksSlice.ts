import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DrinksState {
	drinks: string[];
	drinksContainer: DrinksContainerItem[];
	categoryRoute: string;
}

export interface DrinksContainerItem {
	category: string;
	items: string[];
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
	// drinks do wywalenia glownie bedzie drinksCOntainer
	drinksContainer: [
		{
			category: "NAPOJE",
			items: [
				"coca cola",
				"pepsi",
				"frugo",
				"fanta",
				"sprite",
				"MONTEN DJU",
				"sok",
				"tymbark",
			],
		},
		{
			category: "NAPOJE ZERO",
			items: [
				"coca cola zero",
				"pepsi zero",
				"fanta zero",
				"sprite zero",
				"oshe zero",
				"dzik zero",
			],
		},
		{
			category: "ALCOHOL",
			items: [
				"stock",
				"alkohol2",
				"alkohol3",
				"alkohol4",
				"alkohol5",
				"alkohol6",
				"alkohol7",
				"alkohol8",
			],
		},
		{
			category: "WIECEJ",
			items: [
				"coca cola",
				"pepsi",
				"frugo",
				"fanta",
				"sprite",
				"MONTEN DJU",
				"sok",
				"tymbark",
				"stock",
				"alkohol2",
				"alkohol3",
				"alkohol4",
				"alkohol5",
				"alkohol6",
				"alkohol7",
				"STUMBRAS",
				"element1",
				"element2",
				"element3",
				"element4",
				"element5",
				"element6",
				"element7",
				"element8",
				"element9",
			],
		},
	],
	categoryRoute: "",
};

const drinksSlice = createSlice({
	name: "drinksSlice",
	initialState,
	reducers: {
		// addDrink: (state: {drinks:string[]}, action: PayloadAction<string>) => {
		// 	// Dodać nowy napój do tablicy
		// 	state.drinks.push(action.payload);
		//   },

		// addDrinks: (state, action: PayloadAction<string[]>) => {
		// 	// Zastąp całą tablicę nowymi napojami
		// 	state.drinks = action.payload;
		// },

		allDrinks: (state: DrinksState): DrinksState => {
			return state;
		},

		replaceDrinks: (state: DrinksState, action: PayloadAction<string[]>) => {
			state.drinks = action.payload;
			// dispatch(allDrinks(["nowy napój 1", "nowy napój 2"]));
		},

		categoryNav: (state: DrinksState, action: PayloadAction<string>) => {
			state.categoryRoute = action.payload;
			// dispatch(allDrinks("nowy napój 2"));
		},

		setCategory: (state: DrinksState, action: PayloadAction<string>) => {
			const drinkName = action.payload;
			for (const category of state.drinksContainer) {
				if (category.items.includes(drinkName.trim())) {
					state.categoryRoute = category.category;
					return;
				}
			}
			state.categoryRoute = "";
		},

		resetState: (state: DrinksState) => {
			state.categoryRoute = "";
		},
	},
});

export const {
	allDrinks,
	categoryNav,
	resetState,
	replaceDrinks,
	setCategory,
} = drinksSlice.actions;

// Reducer
export default drinksSlice.reducer;

// Selektor
export const selectDrinks = (state: { drinks: DrinksState }) =>
	state.drinks.drinks;

export const NAPOJE_SELECTOR = (state: { drinks: DrinksState }) => {
	const napojeCategory = state.drinks.drinksContainer.find(
		(item) => item.category === "NAPOJE",
	);

	return napojeCategory ? napojeCategory.items : [];
};

export const AlCOHOL_SELECTOR = (state: { drinks: DrinksState }) => {
	const napojeCategory = state.drinks.drinksContainer.find(
		(item) => item.category === "ALCOHOL",
	);

	return napojeCategory ? napojeCategory.items : [];
};

export const WIECEJ_SELECTOR = (state: { drinks: DrinksState }) => {
	const napojeCategory = state.drinks.drinksContainer.find(
		(item) => item.category === "WIECEJ",
	);

	return napojeCategory ? napojeCategory.items : [];
};

export const selectCategoryRoute = (state: { drinks: DrinksState }) =>
	state.drinks.categoryRoute;
