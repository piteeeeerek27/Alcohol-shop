import { useDispatch, useSelector } from "react-redux";
import {
	NAPOJE_SELECTOR,
	AlCOHOL_SELECTOR,
	WIECEJ_SELECTOR,
	selectCategoryRoute,
} from "../features/drinks/drinksSlice";
import "../styles/Products.scss";
import EachProduct from "./EachProduct";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import { addToCart } from "../features/basket/basketSlice";

const Products = () => {
	const categoryRoute = useSelector(selectCategoryRoute);
	const napoje = useSelector(NAPOJE_SELECTOR);
	const alkohol = useSelector(AlCOHOL_SELECTOR);
	const wiecej = useSelector(WIECEJ_SELECTOR);

	const getCategorySelector = () => {
		switch (categoryRoute) {
			case "NAPOJE":
				return napoje;
			case "ALCOHOL":
				return alkohol;
			case "WIECEJ":
				return wiecej;
			default:
				return wiecej;
		}
	};

	useEffect(() => {
		console.log("categoryRoute", categoryRoute);
	}, []);

	// const handleAddToCart = (product) => {

	// 	dispatch(addToCart(product))
	// };

	return (
		<div className="Products">
			<div className="product-container">
				{getCategorySelector().map((drink) => (
					<EachProduct key={drink} name={drink} />
				))}
			</div>
			<div className="basket-container">
				<IconButton style={{ color: "red" }}>
					<ShoppingCartTwoToneIcon className="basket-container--shopping-icon" />
				</IconButton>
				{/* {basket.length > 0 && (
					<IconButton style={{ color: "red" }}>
						<ShoppingCartTwoToneIcon
							style={{
								fontSize: "50px",
							}}
						/>
					</IconButton>
				)} */}
			</div>
		</div>
	);
};

export default Products;
