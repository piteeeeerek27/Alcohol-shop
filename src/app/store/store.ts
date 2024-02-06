import { configureStore } from "@reduxjs/toolkit";
import drinksReducer from "../../features/drinks/drinksSlice";
import cartReducer from "../../features/basket/basketSlice";

export const store = configureStore({
	reducer: {
		drinks: drinksReducer,
		cart: cartReducer,
	},
});

export type ShopState = ReturnType<typeof store.getState>;
export type ShopDispatch = typeof store.dispatch;

export default store;
