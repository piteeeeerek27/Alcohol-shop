import "./Shop.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { ShopState } from "./app/store/store";
import { useEffect, useState } from "react";

function Shop() {
	const [category, setCategory] = useState("");
	const [items, setItems] = useState([]);

	const { drinksContainer } = useSelector((state: ShopState) => state.drinks);
	useEffect(() => {
		console.log("fasfaasfasf", drinksContainer);
		// setCategory(drinksContainer)
	}, []);

	return (
		<>
			<Router>
				<div className="Shop">
					<nav>
						<Header />
					</nav>

					<div className="routes">
						<Routes>
							<Route path="/" element={<Home />} index />
							{drinksContainer.map(({ category, items }) => (
								<Route
									key={category}
									path={`/products/${category}`}
									element={<Products />}
								/>
							))}
						</Routes>
					</div>

					<footer>
						<Footer />
					</footer>
				</div>
			</Router>
		</>
	);
}

export default Shop;
