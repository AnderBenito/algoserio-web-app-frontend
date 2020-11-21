import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
	ApolloLink,
	from,
} from "@apollo/client";
import { GlobalProvider } from "./context/GlobalProvider";
import { getAccessToken, setAccessToken } from "./utils/accessToken";
import jwtDecode from "jwt-decode";

const httpLink = createHttpLink({
	uri: "http://localhost:5000/graphql",
	credentials: "include",
});

const authMiddleware = new ApolloLink((operation, forward) => {
	operation.setContext(({ headers = {} }) => {
		const token = getAccessToken();
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : "",
			},
		};
	});
	return forward(operation);
});

const refreshMiddleware = new ApolloLink((operation, forward) => {
	const token = getAccessToken();

	if (!token) return forward(operation);

	const { exp } = jwtDecode(token) as any;
	console.log(exp);

	if (Date.now() >= exp * 1000) {
		console.log("Token expired");

		fetch("http://localhost:5000/auth/refresh_token", {
			method: "POST",
			credentials: "include",
		}).then(async (res) => {
			const data = await res.json();

			if (data.accessToken) {
				setAccessToken(data.accessToken);
			}
		});
	}

	return forward(operation);
});
// const authLink = setContext((_, { headers }) => {
// 	const token = getAccessToken();
// 	return {
// 		headers: {
// 			...headers,
// 			authorization: token ? `Bearer ${token}` : "",
// 		},
// 	};
// });

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: from([refreshMiddleware, authMiddleware, httpLink]),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<GlobalProvider>
				<App />
			</GlobalProvider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
