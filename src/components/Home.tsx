import React, { ChangeEvent as ReactChangeEvent, useState } from "react";
import "../styles/Home.scss";
import IconButton from "@mui/material/IconButton";

import { allBrands } from "../utils/helpers";
import NearMeIcon from "@mui/icons-material/NearMe";
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
	const [productValue, setProductValue] = useState<string>("");
	const [brands, setBrands] = useState(allBrands);

	const onProductChange = (event: any) => {
		console.log("event", event);
	};

	return (
		<div className="Home">
			<div className="home-top-section">
				<OutlinedInput
					style={{
						borderRadius: "20px",
						border: "1px solid whitesmoke",
						width: "80%",
						color: "whitesmoke",
					}}
					endAdornment={
						<InputAdornment position="end">
							<IconButton>
								<SearchIcon style={{ color: "whitesmoke" }} />
							</IconButton>
						</InputAdornment>
					}
					placeholder="Wyszukaj produkt ..."
					value={productValue}
					onChange={onProductChange}
				/>
				<IconButton style={{ marginTop: "10px", color: "whitesmoke" }}>
					<NearMeIcon
						sx={{
							fontSize: 60,
							padding: "10px",
							cursor: "pointer",
							color: "whitesmoke",
							"&:hover": {
								transform: "scale(1.5)",
								transition: "transform 0.2s ease",
							},
						}}
					/>
				</IconButton>
			</div>

			<div className="Home-bottom-section"></div>
		</div>
	);
};

export default Home;
