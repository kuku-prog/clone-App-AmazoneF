import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CheckOutProduct from "./CheckOutProduct";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../firebase";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue(); // to access the  data layer using the hook useStateClue

	const Navigate = useNavigate();

	const stripe = useStripe();
	const element = useElements();

	const getBasketTotal = (basket) =>
		basket.reduce((amount, item) => item.price + amount, 0);
	// amount here is an accumulator and initial value is 0

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");

	const [clientSecret, setClientSecret] = useState(true);

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true); // always disabled at first
	//states for the buy now button

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`, // stripe knows the currency as a smallest unit. for a 10 dolar expects 1000

				//every thing after "?" is the query parameters
			});

			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	console.log("THE SECRET IS>>>", clientSecret);
	// ********************************************************** chat gpt 1******
	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	setProcessing(true);

	// 	try {
	// 		const payload = await stripe.confirmCardPayment(clientSecret, {
	// 			payment_method: {
	// 				card: element.getElement(CardElement),
	// 			},
	// 		});

	// 		// Rest of your code...
	// 	} catch (error) {
	// 		console.error("Error confirming payment:", error);
	// 		setError("An error occurred while processing the payment.");
	// 		setProcessing(false);
	// 	}
	// 	Navigate("/orders");
	// };
	// ***************************************************my own*****************
	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	setProcessing(true);

	// 	const payload = await stripe
	// 		.confirmCardPayment(clientSecret, {
	// 			payment_method: {
	// 				card: element.getElement(CardElement),
	// 			},
	// 		})
	// 		.then(({ paymentIntent }) => {
	// 			// paymentIntent = A payment confirmation comming back

	// 			db.collection("users")
	// 				.doc(user?.uid)
	// 				.collection("orders")
	// 				.doc(paymentIntent.id)
	// 				.set({
	// 					basket: basket,
	// 					amount: paymentIntent.amount,
	// 					created: paymentIntent.created,
	// 				});

	// 			setSucceeded(true); // already charged
	// 			setError(null); // no need for error for its already charged
	// 			setProcessing(false); // no longer processing so back to normal display

	// 			dispatch({
	// 				type: "EMPTY_BASKET",
	// 			});

	// 			Navigate("/orders");
	// 		});
	// };
	// ******************************************************************chat gpt 2**************
	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);

		try {
			const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: element.getElement(CardElement),
				},
			});

			await db
				.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.doc(paymentIntent.id)
				.set({
					basket: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
				});

			dispatch({
				type: "EMPTY_BASKET",
			});

			setSucceeded(true);
			setError(null);
			setProcessing(false);

			// Navigate here after all asynchronous operations are complete
			Navigate("/orders");
		} catch (error) {
			console.error("Error confirming payment:", error);
			setError("An error occurred while processing the payment.");
			setProcessing(false);
		}
	};

	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout(<Link to="/checkout">{basket?.length} items</Link>)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>12345 67th Ave</p>
						<p>Seattle, WA</p>
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and Delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckOutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="paymet__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total :{value}</h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>processing</p> : "Buy Now"}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
