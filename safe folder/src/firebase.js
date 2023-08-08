// Import the functions you need from the SDKs you need
// CheckOut 2:33:10 from video

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB9j66Ct057uAtKm6UOMBygwl7etSQRhEA",
	authDomain: "clone-front-2c5cd.firebaseapp.com",
	projectId: "clone-front-2c5cd",
	storageBucket: "clone-front-2c5cd.appspot.com",
	messagingSenderId: "625756300831",
	appId: "1:625756300831:web:b52adbf4d9d2d7d669572a",
	measurementId: "G-0CE1C9ECLC",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const db = app.firestore();

export { auth, db };

// **********************

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB9j66Ct057uAtKm6UOMBygwl7etSQRhEA",
//   authDomain: "clone-front-2c5cd.firebaseapp.com",
//   projectId: "clone-front-2c5cd",
//   storageBucket: "clone-front-2c5cd.appspot.com",
//   messagingSenderId: "625756300831",
//   appId: "1:625756300831:web:b52adbf4d9d2d7d669572a",
//   measurementId: "G-0CE1C9ECLC"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
