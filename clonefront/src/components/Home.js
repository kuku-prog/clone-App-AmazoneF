import React from "react";
import "./Home.css";
import Product from "./Product";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import { colors } from "@mui/material";
// import { yellow } from "@mui/material/colors";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id=""
						title="MAXTOP Laptop Backpack with USB Charging Port"
						price={25.77}
						rating={5}
						image="https://m.media-amazon.com/images/I/410eaSTCqnL._MCnd_AC_.jpg"
						// StarBorderIcon="5"
					/>

					<Product
						id=""
						title="Double Diamond 3.4 Eau De Perfume Spray Women"
						image="https://m.media-amazon.com/images/I/41aT22Wap9L._SX569_.jpg"
						price={9}
						rating={4}
					/>

					<Product
						title="NIDO Kinder 1+ Toddler Powdered Milk – 56.3 Oz "
						image="	https://m.media-amazon.com/images/I/8110VDGEgHL._AC_SY240_.jpg"
						price={22.98}
						rating={4}
					/>
					<Product
						id=""
						title="Amazon Basics Vitamin D3 2000 IU Gummies, Orange, Lemon & Strawberry"
						price={10.97}
						rating={5}
						image="	https://m.media-amazon.com/images/I/51sX+0vlXbL._AC_SY240_.jpg"
						// StarBorderIcon="5"
					/>
				</div>
				<div className="home__row">
					<Product
						id=""
						title="Amazon Basics Dish Soap, Fresh Scent, 30 fl oz, Pack of 4"
						price={15.74}
						rating={5}
						image="https://m.media-amazon.com/images/I/714Ez4BHFZL._AC_SX425_PIbundle-4,TopRight,0,0_SH20_.jpg"
					/>
					<Product
						title="VGAzer Magnetic Levitating Floating Wireless LED Light Bulb "
						image="https://m.media-amazon.com/images/I/61p3M0XZ4AL._AC_SX679_.jpg"
						price={72.99}
						rating={4}
					/>
					<Product
						title="Sceptre Curved 24-inch Gaming Monitor 1080p R1500 98% sRGB HDMI x2 VGA Build-in Speakers"
						image="https://m.media-amazon.com/images/I/71P0M7tKjYL._AC_SX569_.jpg"
						price={89.97}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						title="L'OR Barista System Coffee and Espresso Machine Combo by Philips, Black"
						image="		https://m.media-amazon.com/images/I/71CqHnf2LhL._AC_SX522_.jpg"
						price={159.0}
						rating={5}
					/>

					<Product
						title="Aoxun Outdoor Storage Shed Waterproof, 6.4x4.3FT and Garden Shed for Bike"
						image="https://m.media-amazon.com/images/I/91lnY9cafGL._AC_SY450_.jpg"
						price={188.99}
						rating={4}
					/>
					<Product
						id=""
						title="SaphiRose Women's Long Hooded Rain Jacket"
						image="https://m.media-amazon.com/images/I/61I3SHQFXtL._AC_SX679_.jpg"
						price={49.99}
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
