import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import NavBar from "./components/NavBar";
import { GlobalContext } from "./context/GlobalProvider";
import { useApolloClient } from "@apollo/client";
import { setAccessToken } from "./utils/accessToken";

const App: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [_, setUser] = useContext(GlobalContext);
	const client = useApolloClient();

	useEffect(() => {
		setLoading(true);
		console.log(client.link);
		fetch("http://localhost:5000/auth/refresh_token", {
			method: "POST",
			credentials: "include",
		}).then(async (res) => {
			const data = await res.json();

			if (data.accessToken) {
				//localStorage.setItem("accessToken", data.accessToken);
				setAccessToken(data.accessToken);
				setUser({
					loggedIn: true,
				});
			}
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <div className="container">Loading...</div>;
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
