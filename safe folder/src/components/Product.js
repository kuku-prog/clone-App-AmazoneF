import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function Product({ title, id, image, price, rating }) {
	console.log(id);
	const [{ basket }, dispatch] = useStateValue();
	// console.log("this is the basket", basket);
	const addToBasket = () => {
		dispatch({
			// dispatching is the action
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating) //an array constructor a number is passed to it.
						.fill() // fills the amount of number of items
						.map(() => (
							<p>
								<StarBorderIcon />
							</p>
						))}
				</div>
			</div>
			<div>
				<img src={image} alt="" />
				<button onClick={addToBasket}>Add to Cart</button>
			</div>
		</div>
	);
}

export default Product;

// https://m.media-amazon.com/images/I/41aT22Wap9L._SX569_.jpg (image for perfume)
//https://m.media-amazon.com/images/I/61p3M0XZ4AL._AC_SX679_.jpg (image for the esp lamp)
//https://m.media-amazon.com/images/I/71jrRmizvCL._AC_SX425_.jpg(soap product)
