import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyAGtq8bzaMCU_iVogoT6700sXCWUkRLXB4",
	authDomain: "react-dashboard-d9915.firebaseapp.com",
	projectId: "react-dashboard-d9915",
	storageBucket: "react-dashboard-d9915.appspot.com",
	messagingSenderId: "893467184032",
	appId: "1:893467184032:web:edff0d01f78044de69b2c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
	<ContextProvider>
		<App />
	</ContextProvider>,
	document.getElementById("root")
);
