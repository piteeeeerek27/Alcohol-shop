import "./Shop.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Home from "./components/Home";

function Shop() {
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
							<Route path="/about" element={<Products />} />
							{/* <Route path="/contact" element={<Contact />} /> */}
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
