import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allDrinks } from "../features/drinks/drinksSlice";
import "../styles/Home.scss";
import HomeProduct from "./HomeProduct";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

const Home = () => {
	const dispatch = useDispatch();
	const basket = [];
	// const listOfDrinks = useSelector(
	// 	(state: { drinks: string[] }) => state.drinks,
	// );
	// const handleAddDrink = (newDrink: string) => {
	// };
	useEffect(() => {
		dispatch(allDrinks());
	}, [dispatch]);

	return (
		<div className="Home">
			<div className="product-container">
				<HomeProduct />
				<HomeProduct />
				<HomeProduct />
				<HomeProduct />
				<HomeProduct />
				<HomeProduct />
				<HomeProduct />
				<HomeProduct />
				<HomeProduct />
			</div>
			<div className="basket-container">
				{basket.length > 0 && (
					<IconButton style={{ color: "white" }}>
						<ShoppingCartTwoToneIcon
							style={{
								fontSize: "50px",
							}}
						/>
					</IconButton>
				)}
			</div>
		</div>
	);
};

export default Home;
