import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	ALKOHOLE_SELECTOR,
	NAPOJE_SELECTOR,
} from "../features/drinks/drinksSlice";
import "../styles/Products.scss";
import EachProduct from "./EachProduct";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

const Products = () => {
	const napojeSelector = useSelector(NAPOJE_SELECTOR);
	const alkoholeSelector = useSelector(ALKOHOLE_SELECTOR);
	const basket = [];

	useEffect(() => {
		console.log("Products napojeSelector", napojeSelector);
	}, []);

	return (
		<div className="Products">
			<div className="product-container">{}</div>
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

export default Products;
