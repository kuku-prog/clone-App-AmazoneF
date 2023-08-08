import "./App.css";
import { useEffect } from "react";
import CheckOut from "./components/CheckOut";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
// import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
// const promise = loadStripe(
// 	"pk_test_51NbYIsC83nS3trygb46Dj632fWA8TSOclLdzUvxlqlJtXJZu6ixSxDDL21l20PwnXOi5GNZiSygRi9o8nJ7Pqjic00L374R6xu"
// );

const promise = loadStripe(
	"pk_test_51NbYIsC83nS3trygb46Dj632fWA8TSOclLdzUvxlqlJtXJZu6ixSxDDL21l20PwnXOi5GNZiSygRi9o8nJ7Pqjic00L374R6xu"
);

// const stripe = await loadStripe(
// 	"pk_test_51NbYIsC83nS3trygb46Dj632fWA8TSOclLdzUvxlqlJtXJZu6ixSxDDL21l20PwnXOi5GNZiSygRi9o8nJ7Pqjic00L374R6xu"
// );pk_test_51NbYIsC83nS3trygb46Dj632fWA8TSOclLdzUvxlqlJtXJZu6ixSxDDL21l20PwnXOi5GNZiSygRi9o8nJ7Pqjic00L374R6xu

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<CheckOut />
							</>
						}
					/>
					<Route
						path="/orders"
						element={
							<>
								<Header />
								<Orders />
							</>
						}
					/>
					<Route
						path="/login"
						element={
							<>
								<Login />
							</>
						}
					/>
					<Route
						path="/payment"
						element={
							<>
								<Header />
								<Elements stripe={promise}>
									<Payment />
								</Elements>
							</>
						} // pass promise as a prop while Element wrapping payment
					/>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
