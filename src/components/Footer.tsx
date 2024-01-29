import React from "react";
import "../styles/Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
	const navigate = useNavigate();

	const handleIconNavigate = (url: string) => {
		navigate(url);
	};

	return (
		<footer className="footer">
			<div className="footer-info">
				<h5>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, amet!
				</h5>
			</div>

			<div className="footer-links">
				<a
					className="email-icon"
					href="#"
					onClick={() => handleIconNavigate("/email")}>
					<EmailIcon />
				</a>
				<a className="phone-icon" href="#">
					<CallIcon />
				</a>
				<a
					className="ig-icon"
					href="https://www.instagram.com/"
					target="_blank"
					onClick={() => handleIconNavigate("/instagram")}>
					<InstagramIcon />
				</a>
				<a
					className="fb-icon"
					href="https://www.facebook.com/"
					target="_blank"
					onClick={() => handleIconNavigate("/facebook")}>
					<FacebookIcon />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
