import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
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
import { updateCategoryRoute } from "../features/drinks/drinksSlice";

const Header: React.FC = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [typing, setTyping] = useState<boolean>(false);
	const [filterData, setFilterData] = useState<string[]>([]);

	let navigate = useNavigate();
	const dispatch = useDispatch();
	const { drinks } = useSelector((state: ShopState) => state.drinks);
	const { drinksContainer } = useSelector((state: ShopState) => state.drinks);

	useEffect(() => {
		const valueLower = inputValue.toLowerCase();
		const filteredItems = drinks.filter((item) =>
			item.toLowerCase().includes(valueLower),
		);
		// console.log("selectCategoryRoute", selectCategoryRoute);

		setFilterData(filteredItems);
	}, [inputValue]);

	const handleInputChange = (value: string) => {
		setTyping(true);
		setInputValue(value.toLowerCase().trim());

		return () => {
			setTyping(false);
		};
	};

	const navigateTo = (item: string) => {
		// navigacja LI
		console.log("item", item);

		navigate(`${drinks}/${item}`);
	};

	const findProduct = () => {
		console.log("filterData", filterData);
	};

	const categoryProducts = (value: string) => {
		// navigacja z UL
		console.log("value", value);
		navigate(`products/${value}`);
		dispatch(updateCategoryRoute(value));

		//  // TERAZ POBIERASZ VALUE UPDATOWANE po KLILNIECIU NA NAVIGACJE i przechodzisz do strony z załądowanymi itemami pod dana kategorie
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
						onClick={() => categoryProducts("WIĘCEJ")}
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
				<input
					type="text"
					className="search-bar--input"
					value={inputValue}
					onChange={({ target }) => handleInputChange(target.value)}
					placeholder="Znajdz produkt"
				/>
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
