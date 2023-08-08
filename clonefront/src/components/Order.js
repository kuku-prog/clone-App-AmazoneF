import React from "react";
import "./Order.css";
import moment from "moment";
import CheckOutProduct from "./CheckOutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
	return (
		<div className="order">
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
			<p className="order__id">
				<small>{order.id}</small>
			</p>
			{order.data.basket?.map((item) => (
				<CheckOutProduct
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					rating={item.rating}
					hideButton
				/>
			))}
			<CurrencyFormat
				renderText={(value) => (
					<h3 className="order__total">Order Total: {value}</h3>
				)}
				decimalScale={2}
				value={order.data.amount / 100}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
		</div>
	);
}

export default Order;

// ********************all new bactch**************

// <div className="order">
// 	<h2>Order</h2>
// 	{/* Conditional rendering for order data */}
// 	{order.data ? (
// 		<>
// 			<p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
// 			<p className="order__id">
// 				<small>{order.id}</small>
// 			</p>
// 			{order.data.basket?.map((item) => (
// 				<CheckOutProduct
// 					key={item.id} // Don't forget to add a key prop for mapping
// 					id={item.id}
// 					title={item.title}
// 					image={item.image}
// 					price={item.price}
// 					rating={item.rating}
// 					hideButton
// 				/>
// 			))}
// 		</>
// 	) : (
// 		// Display a message or loading spinner if order data is not available
// 		<p>Loading order data...</p>
// 	)}

// 	<CurrencyFormat
// 		renderText={(value) => (
// 			<h3 className="order__total">Order Total: {value}</h3>
// 		)}
// 		decimalScale={2}
// 		// value={order.data.amount / 100}
// 		displayType={"text"}
// 		thousandSeparator={true}
// 		prefix={"$"}
// 	/>
// </div>;
