import React, { ChangeEvent, useState } from "react";
import "../styles/Header.scss";
// import { useSelector } from "react-redux";
// import { RootState } from '../app/store'; // Załóżmy, że plik store.tsx zawiera konfigurację Redux store

const Header: React.FC = () => {
	const [inputValue, setInputValue] = useState<string>("");

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
		console.log("input ‼️", event.target.value);
	};

	return (
		<div className="header">
			<div className="header-sign">
				<h1>24/7</h1>
			</div>
			<div className="navigation">
				<ul>
					<li>
						NAPOJE ZERO
						<ul>
							<li>COLA ZERO</li>
							<li>SPRITE ZERO</li>
							<li>FANTA ZERO</li>
						</ul>
					</li>
					<li>
						ALKO
						<ul>
							<li>WODA</li>
							<li>PIWO</li>
							<li>SETKA</li>
						</ul>
					</li>
					<li>
						PRZEKĄSKI
						<ul>
							<li>CHIPSY</li>
							<li>BATONY</li>
							<li>SŁONE</li>
						</ul>
					</li>
					<li>
						NAPOJE
						<ul>
							<li>COLA</li>
							<li>SPRITE</li>
							<li>FANTA</li>
						</ul>
					</li>
					{/* {navigationItems.map((item) => (
            <li key={item.id}>{item.label}</li>
          ))} */}
				</ul>
			</div>
			<div className="logo">
				<img
					src="https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Monkey-Avatar-icon.png"
					alt="monkeys"
				/>
			</div>
			<div className="search-bar">
				<form action="">
					<input
						type="text"
						required
						className="search-bar--input"
						value={inputValue}
						onChange={handleInputChange}
						placeholder="Znajdz produkt"
					/>
					<input
						className="search-bar--submit-input"
						type="submit"
						value="Szukaj"
					/>
				</form>
			</div>
		</div>
	);
};

export default Header;
