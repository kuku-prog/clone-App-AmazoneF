// import React, { useState } from "react";
// import { link, useNaviagte } from "react-router-dom";
// import "./Login.css";
// import {
// 	signInWithEmailAndPassword,
// 	createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../firebase";

// function Login() {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");

// 	const signIn = (e) => {
// 		e.preventDefault();
// 		// signInWithEmailAndPassword(email, password).then((auth) =>
// 		// 	console.log(auth)
// 		// );
// 	};

// 	const register = (e) => {
// 		e.preventDefault();
// 		auth.createUserWithEmailAndPassword(email, password);
// 		// .then((auth) => console.log(auth));
// 	};

import React, { useState } from "react";
import { Link, useNavigate, useHistory } from "react-router-dom"; // Fixed typo here
import "./Login.css";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate(); // Use useNavigate hook to programmatically navigate

	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password) // Use 'auth' as the first argument
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				// You can now navigate to another page if needed
				navigate("/");
			})
			.catch((error) => {
				// Handle sign-in errors here
				console.error(error.message);
			});
	};

	const register = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password) // Use 'auth' as the first argument
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				// Handle registration errors here
				console.error(error.message);
			});
	};

	//   return (
	//     <div>
	//       <h1>Login</h1>
	//       <form>
	//         <input
	//           type="email"
	//           value={email}
	//           onChange={(e) => setEmail(e.target.value)}
	//           placeholder="Email"
	//         />
	//         <input
	//           type="password"
	//           value={password}
	//           onChange={(e) => setPassword(e.target.value)}
	//           placeholder="Password"
	//         />
	//         <button type="submit" onClick={signIn}>
	//           Sign In
	//         </button>
	//         <button type="button" onClick={register}>
	//           Register
	//         </button>
	//       </form>
	//       <p>
	//         Don't have an account? <Link to="/register">Register here</Link>
	//       </p>
	//     </div>
	//   );
	// }

	// export default Login; // Added the missing closing brace here

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
				/>
			</Link>

			<div className="login__container">
				<h1>Sign-in</h1>

				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						// e-event being in putted
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						// e-event being in putted
					/>
					{/* <input
						type="password"
						value={password}
						onchange={(e) => setPassword(e.target.value)}
					/> */}
					<button
						className="login__signInButton"
						type="submit"
						onClick={signIn}
					>
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to the AMAZON EDUCATIONAL CLONE conditions of
					Use & Sale. Please see our Privacy Notice. our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>

				<button
					type="submit"
					onClick={register}
					className="login__registerButton"
				>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
