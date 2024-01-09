import React, { ChangeEvent, useState } from "react";
import "../styles/Header.scss";
// import { useSelector } from "react-redux";
// import { RootState } from '../app/store'; // Załóżmy, że plik store.tsx zawiera konfigurację Redux store

interface HeaderProps {
	// Dodaj dowolne dodatkowe propsy, jeśli są potrzebne
}

const Header: React.FC<HeaderProps> = () => {
	const [inputValue, setInputValue] = useState<string>("");

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
		console.log("input ‼️", event.target.value);
	};

	return (
		<div className="header">
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
				<h1>LOGO</h1>
			</div>
			<div className="search-bar">
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					placeholder="Znajdz produkt"
				/>
			</div>
		</div>
	);
};

export default Header;
