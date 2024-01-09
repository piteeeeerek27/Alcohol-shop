import "./Shop.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
							<Route path="/about">{/* <About /> */}</Route>
							<Route path="/users">{/* <Users /> */}</Route>
							<Route path="/">{/* <Home /> */}</Route>
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
