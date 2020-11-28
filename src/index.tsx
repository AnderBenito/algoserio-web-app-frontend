import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from "./context/GlobalProvider";
import ApolloStart from "./ApolloStart";
require("dotenv").config();

console.log(process.env);
ReactDOM.render(
	<React.StrictMode>
		<GlobalProvider>
			<ApolloStart>
				<App />
			</ApolloStart>
		</GlobalProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
