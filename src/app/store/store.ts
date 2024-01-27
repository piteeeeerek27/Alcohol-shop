import { configureStore } from "@reduxjs/toolkit";
import drinksReducer from "../../features/drinks/drinksSlice";

export const store = configureStore({
	reducer: {
		drinks: drinksReducer,
	},
});

export type ShopState = ReturnType<typeof store.getState>;
export type ShopDispatch = typeof store.dispatch;

export default store;
