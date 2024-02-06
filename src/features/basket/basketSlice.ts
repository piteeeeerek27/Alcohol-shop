import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
	id: number;
	price: string;
	capacity: number;
	quantity: number;
}

interface CartState {
	cartItems: CartItem[];
	cartQuantity: number;
	capacity: number;
}

const initialState: CartState = {
	cartItems: [],
	cartQuantity: 0,
	capacity: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<CartItem>) {
			state.cartItems.push(action.payload);
		},
	},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
