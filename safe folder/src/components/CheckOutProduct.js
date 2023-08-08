import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function CheckOutProduct({ id, image, title, price, rating }) {
	const [{ basket }, dispatch] = useStateValue(); // to dispatch to data layer(push)
	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id, // or id, only!
		});
	};

	return (
		<div className="checkOutProduct">
			<img className="checkoutProduct__image" src={image} />
			<div className="checkOutProduct__info">
				<p className="checkOutProduct__title">{title}</p>
				<p className="checkOutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkOutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>
								<StarBorderIcon />
							</p>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove from Basket</button>
			</div>
		</div>
	);
}

export default CheckOutProduct;
