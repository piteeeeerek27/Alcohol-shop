import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import "../styles/EachProduct.scss";
import { useEffect, useState } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useDispatch } from "react-redux";

const EachProduct = (data: { name: string }) => {
	const [quantity, setQuantity] = useState<string>("");
	const [capacity, setCapacity] = useState<string>("");
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("data", data);
	}, []);

	const handleChange =
		(fieldName: "quantity" | "capacity") => (event: SelectChangeEvent) => {
			const value = event.target.value;

			switch (fieldName) {
				case "quantity":
					setQuantity(value);
					break;
				case "capacity":
					setCapacity(value);
					break;

				default:
					break;
			}
		};

	const addProduct = () => {
		console.log("add Product q", quantity);
		console.log("add Product c", capacity);
	};

	return (
		<div className="eachProduct">
			<img
				src="https://p1.hiclipart.com/preview/19/404/887/pizza-fizzy-drinks-pepsi-pepsi-wild-cherry-pizza-inn-food-pepsi-bottle-drink-can-png-clipart.jpg"
				alt=""
			/>
			<span className="name">{data?.name}</span>
			<div className="product-select-price">
				<span>4.50 zł</span>
				<FormControl sx={{ marginLeft: "10px" }} size="small">
					<InputLabel className="select-capacity-label">Rozmiar</InputLabel>
					<Select
						labelId="select-capacity-label"
						className="select-capacity"
						value={capacity}
						label="capacity"
						onChange={handleChange("capacity")}>
						<MenuItem value={"small"}>200ml</MenuItem>
						<MenuItem value={"large"}>litr</MenuItem>
						<MenuItem value={"biG"}>2litry</MenuItem>
					</Select>
				</FormControl>

				<FormControl sx={{ marginLeft: "10px" }} size="small">
					<InputLabel className="select-quantity-label">Ilość</InputLabel>
					<Select
						labelId="select-quantity-label"
						className="select-quantity"
						value={quantity}
						label="quantity"
						onChange={handleChange("quantity")}>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={6}>6</MenuItem>
						<MenuItem value={7}>7</MenuItem>
						<MenuItem value={8}>8</MenuItem>
						<MenuItem value={9}>9</MenuItem>
						<MenuItem value={10}>10</MenuItem>
					</Select>
				</FormControl>
			</div>
			<Button
				style={{ textTransform: "lowercase" }}
				onClick={addProduct}
				variant="text"
				size="small"
				endIcon={<LocalGroceryStoreIcon />}>
				add to cart
			</Button>
		</div>
	);
};

export default EachProduct;
