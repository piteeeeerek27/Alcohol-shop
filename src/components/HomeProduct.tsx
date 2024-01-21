import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import "../styles/HomeProduct.scss";
import { useState } from "react";

const HomeProduct = () => {
	const [quantity, setQuantity] = useState("");
	const [capacity, setCapacity] = useState("");

	const handleChangeQuantity = (event: SelectChangeEvent) => {
		setQuantity(event.target.value);
		console.log("ilosc", event.target.value);
	};

	const handleChangeCapacity = (event: SelectChangeEvent) => {
		setCapacity(event.target.value);
		console.log("pojemnosc", event.target.value);
	};

	const addProduct = () => {
		console.log("add Product q", quantity);
		console.log("add Product c", capacity);
	};

	return (
		<div className="HomeProduct">
			<img
				src="https://p1.hiclipart.com/preview/19/404/887/pizza-fizzy-drinks-pepsi-pepsi-wild-cherry-pizza-inn-food-pepsi-bottle-drink-can-png-clipart.jpg"
				alt=""
			/>
			<span className="name">Pepsi</span>
			<div className="product-select-price">
				<span>4.50 zł</span>
				<FormControl>
					<Select
						style={{
							color: "whitesmoke",
							width: "60px",
							height: "40px",
							textAlign: "center",
						}}
						value={quantity}
						onChange={handleChangeQuantity}
						displayEmpty>
						<MenuItem value="">
							<em>1</em>
						</MenuItem>
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
				<FormControl>
					<Select
						style={{
							color: "whitesmoke",
							width: "110px",
							height: "40px",
							textAlign: "center",
						}}
						value={capacity}
						onChange={handleChangeCapacity}
						displayEmpty>
						<MenuItem value="">
							<em>200ml</em>
						</MenuItem>
						<MenuItem value="350ml">350ml</MenuItem>
						<MenuItem value="litrowe">litrowe</MenuItem>
						<MenuItem value="2litrowe">2litrowe</MenuItem>
					</Select>
				</FormControl>
			</div>
			<button onClick={addProduct}>add to cart</button>
		</div>
	);
};

export default HomeProduct;
