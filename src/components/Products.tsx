import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allDrinks } from "../features/drinks/drinksSlice";
import "../styles/Products.scss";
import EachProduct from "./EachProduct";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

const Products = () => {
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
		<div className="Products">
			<div className="product-container">
				<EachProduct />
				<EachProduct />
				<EachProduct />
				<EachProduct />
				<EachProduct />
				<EachProduct />
				<EachProduct />
				<EachProduct />
				<EachProduct />
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

export default Products;
