import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import NavBar from "./components/NavBar";
import { GlobalContext } from "./context/GlobalProvider";
import { useApolloClient } from "@apollo/client";
import { setAccessToken } from "./utils/accessToken";
import fetchRequestToken from "./utils/fetchRequestToken";
import LoadingSpinner from "./components/LoadingSpinner";

interface Props {}

const App: React.FC<Props> = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [user, setUser] = useContext(GlobalContext);
	const client = useApolloClient();

	useEffect(
		() => {
			setLoading(true);
			console.log(client.link);

			fetchRequestToken().then((data) => {
				if (data.accessToken) {
					setAccessToken(data.accessToken);
					setUser({
						...user,
						loggedIn: true,
					});
				}
				setLoading(false);
			});
		}, // eslint-disable-next-line
		[]
	);

	if (loading) {
		return <LoadingSpinner />;
	}

	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					{routes.map((route, index) => {
						return (
							<Route
								key={index}
								path={route.path}
								exact
								component={route.component}
							></Route>
						);
					})}
				</Switch>
			</Router>
		</div>
	);
};

export default App;
