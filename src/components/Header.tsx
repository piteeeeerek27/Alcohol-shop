import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import "../styles/Header.scss";
import { ALKOHOL, NAPOJE, WIĘCEJ } from "../utils/enums";
import {
	AlkoholInterface,
	DrinksInterface,
	MoreInterface,
} from "../utils/interfaces";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { allDrinks } from "../features/drinks/drinksSlice";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const ARRAY = [
	"coca cola",
	"pepsi ",
	"sprite ",
	"frugo ",
	"żubrówka ",
	"Stock ",
	"kinder bueno",
	"sok pomarańczowy ",
	"papierosy ",
	"sprite zero ",
	"pepsi zero",
];

const Header: React.FC = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [typing, setTyping] = useState<boolean>(false);
	const [filterData, setFilterData] = useState<string[]>([]);

	let navigate = useNavigate();

	useEffect(() => {
		const valueLower = inputValue.toLowerCase();
		const filteredItems = ARRAY.filter((item) =>
			item.toLowerCase().includes(valueLower),
		);

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
		navigate(`/${item}`);
	};

	const findProduct = () => {
		console.log("filterData", filterData);
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
			<div className="header-sign">
				<h1>24/7</h1>
			</div>
			<div className="navigation">
				<ul>
					<li>
						NAPOJE
						<ul className="drinks">{ShowEnums(NAPOJE)}</ul>
					</li>
					<li>
						ALCOHOL
						<ul className="alcohol">{ShowEnums(ALKOHOL)}</ul>
					</li>
					<li>
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
					onClick={() => findProduct()}
					style={{ color: "white", fontSize: "50px" }}>
					<SearchIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default Header;
