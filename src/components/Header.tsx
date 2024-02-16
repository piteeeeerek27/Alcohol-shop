import React, { useEffect, useState } from "react";
import "../styles/Header.scss";
import { ALKOHOL, NAPOJE, WIĘCEJ } from "../utils/enums";
import {
	AlkoholInterface,
	DrinksInterface,
	MoreInterface,
} from "../utils/interfaces";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ShopState } from "../app/store/store";
import {
	categoryNav,
	replaceDrinks,
	selectCategoryRoute,
	setCategory,
} from "../features/drinks/drinksSlice";

const Header: React.FC = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [typing, setTyping] = useState<boolean>(false);
	const [searchedInputValue, setSearchedInputValue] = useState<string[]>([]);
	const [elo, setELo] = useState<string>("");
	const categoryRoute = useSelector(selectCategoryRoute);

	let navigate = useNavigate();
	const dispatch = useDispatch();
	const { drinks } = useSelector((state: ShopState) => state.drinks);

	useEffect(() => {
		// console.log("searchedInputValue ‼️", searchedInputValue);
		console.log("categoryRoute ‼️", categoryRoute);
	}, [searchedInputValue, drinks]);

	const handleInputChange = (value: string) => {
		const filteredItems = drinks.filter((item) =>
			item.toLowerCase().startsWith(value),
		);
		setSearchedInputValue(filteredItems);

		switch (value.length <= 0) {
			case true:
				setTyping(false);
				break;
			case false:
				setTyping(true);
				break;
			default:
				setTyping(false);
				break;
		}
		setInputValue(value.toLowerCase());
	};

	const navigateTo = (item: string) => {
		// navigacja LI
		navigate(`${drinks}/${item}`);
		setELo(item);
		// dispatch(categoryNav(item));
	};

	const findProduct = () => {
		// console.log("searchedInputValue", searchedInputValue);
	};

	const categoryProducts = (value: string) => {
		console.log("value", value);
		// dispatch(setCategoryRoute(value));

		navigate(`products/${value}`);
	};

	const goToSearchedItem = (productName: string) => {
		console.log("productName 👌👌👌👌👌", productName);

		dispatch(setCategory(productName));

		console.log("categoryRoute", categoryRoute);
		// navigate(`products/${categoryRoute}`);
	};

	const ShowEnums = (
		eachCategory: AlkoholInterface | DrinksInterface | MoreInterface,
	) =>
		Object.values(eachCategory).map((category) => {
			return (
				<li onClick={() => navigateTo(category)} key={category}>
					{category}
				</li>
			);
		});

	return (
		<div className="header">
			<div onClick={() => navigate(`/`)} className="header-sign">
				<h1>24/7</h1>
			</div>
			<div className="navigation">
				<ul className="navigation-list">
					<li
						onClick={() => categoryProducts("NAPOJE")}
						className="navigation-list-left-drinks">
						NAPOJE
						<ul className="drinks">{ShowEnums(NAPOJE)}</ul>
					</li>
					<li
						onClick={() => categoryProducts("ALCOHOL")}
						className="navigation-list-middle-drinks">
						ALCOHOL
						<ul className="alcohol">{ShowEnums(ALKOHOL)}</ul>
					</li>
					<li
						onClick={() => categoryProducts("WIECEJ")}
						className="navigation-list-right-drinks">
						WIĘCEJ
						<ul className="more">{ShowEnums(WIĘCEJ)}</ul>
					</li>
				</ul>
			</div>
			<div className="logo">
				<img
					src="https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Monkey-Avatar-icon.png"
					alt="monkeys"
				/>
			</div>
			<div className="search-bar">
				<div className="input-text">
					<input
						type="text"
						className="search-bar--input"
						value={inputValue}
						onChange={({ target }) => handleInputChange(target.value)}
						placeholder="Znajdz produkt"
					/>
					<div
						className={`${
							typing ? "search-bar--dropdown-show" : "search-bar--dropdown"
						} `}>
						{searchedInputValue.map((suggestedItem) => (
							<div
								className="row"
								key={suggestedItem}
								onClick={() => goToSearchedItem(suggestedItem)}>
								<img
									src="https://p1.hiclipart.com/preview/19/404/887/pizza-fizzy-drinks-pepsi-pepsi-wild-cherry-pizza-inn-food-pepsi-bottle-drink-can-png-clipart.jpg"
									alt=""></img>
								<span>{suggestedItem}</span>
								<span>price</span>
							</div>
						))}
					</div>
				</div>
				<IconButton
					className="search-bar--find-icon"
					onClick={() => findProduct()}>
					<SearchIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default Header;
