import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
// import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Header() {
	const [{ basket, user }, dispatch] = useStateValue(); // hook that is letting us pull form data layer

	const handleAutherntication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/" className="header__clearlink">
				<img
					className="header__logo"
					src=" http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				/>
			</Link>
			<LocationOnIcon className="location" />
			<div className="delivery">
				<span>
					<small>Delivery</small>
				</span>
				<span>
					<small>location</small>
				</span>
			</div>
			<div className="header__search">
				<input className="hearder__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to={!user && "/login"} className="header__clearlink">
					<div onClick={handleAutherntication} className="header__option">
						<span className="header__optionLineOne">
							Hello {!user ? "Guest" : user.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign out" : "Sign in"}
						</span>
					</div>
				</Link>

				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<Link to="/checkout" className="header__clearlink">
					<div className="header__optionBasket">
						<ShoppingCartIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
