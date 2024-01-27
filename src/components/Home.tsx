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
						width: "80%",
					}}
					endAdornment={
						<InputAdornment position="end">
							<IconButton>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					}
					placeholder="Wyszukaj..."
					value={productValue}
					onChange={onProductChange}
				/>
				<IconButton style={{ marginTop: "10px" }}>
					<NearMeIcon
						sx={{
							fontSize: 60,
							padding: "10px",
							cursor: "pointer",
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
