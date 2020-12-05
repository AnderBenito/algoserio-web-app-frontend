import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthProvider";
import ApolloStart from "./ApolloStart";
import { ChakraProvider } from "@chakra-ui/react";
import { GalaProvider } from "./context/GalaProvider";
require("dotenv").config();

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<AuthProvider>
				<ApolloStart>
					<GalaProvider>
						<App />
					</GalaProvider>
				</ApolloStart>
			</AuthProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
