import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	ApolloLink,
	from,
	ApolloProvider,
} from "@apollo/client";
import React, { useContext } from "react";
import { getAccessToken, setAccessToken } from "./utils/accessToken";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode from "jwt-decode";
import { AuthContext } from "./context/AuthProvider";

interface Props {}

const ApolloStart: React.FC<Props> = (props) => {
	const { userDispatch } = useContext(AuthContext);
	const httpLink = createHttpLink({
		uri: `${process.env.REACT_APP_API_URL}/graphql`,
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

	const tokenRefreshMiddleware = new TokenRefreshLink({
		accessTokenField: "accessToken",
		isTokenValidOrUndefined: () => {
			const token = getAccessToken();

			if (!token) {
				return true;
			}

			try {
				const { exp } = jwtDecode(token) as any;
				if (Date.now() >= exp * 1000) {
					console.log("Token expired");
					return false;
				} else {
					return true;
				}
			} catch (e) {
				return false;
			}
		},
		fetchAccessToken: () => {
			return fetch(`${process.env.REACT_APP_API_URL}/auth/refresh_token`, {
				method: "POST",
				credentials: "include",
			});
		},
		handleFetch: (accessToken: string) => {
			setAccessToken(accessToken);
		},
		handleError: (err: any) => {
			// full control over handling token fetch Error
			console.warn("Your refresh token is invalid. Try to relogin");
			console.error(err);
			//Log out
			userDispatch({ type: "logout" });
			setAccessToken("");
		},
	});

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: from([tokenRefreshMiddleware, authMiddleware, httpLink]),
	});
	return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};
export default ApolloStart;
