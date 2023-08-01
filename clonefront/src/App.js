import "./App.css";
import { useEffect } from "react";
import CheckOut from "./components/CheckOut";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";

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
						path="/login"
						element={
							<>
								<Login />
							</>
						}
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
