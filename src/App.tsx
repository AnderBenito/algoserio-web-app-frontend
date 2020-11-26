import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import { GlobalContext } from "./context/GlobalProvider";
import { setAccessToken } from "./utils/accessToken";
import fetchRequestToken from "./utils/fetchRequestToken";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import jwtDecode from "jwt-decode";
import RoutesComponent from "./components/RoutesComponent";

interface Props {}

const App: React.FC<Props> = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const { setUser } = useContext(GlobalContext);

	useEffect(
		() => {
			setLoading(true);

			fetchRequestToken()
				.then((data) => {
					if (data.accessToken) {
						setAccessToken(data.accessToken);
						const { isAdmin } = jwtDecode(data.accessToken) as any;
						setUser({
							isAdmin,
							loggedIn: true,
						});
					}
				})
				.catch((error) => {
					console.log(error);
					setUser({
						isAdmin: false,
						loggedIn: false,
					});
				})
				.finally(() => {
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
				<RoutesComponent />
			</Router>
		</div>
	);
};

export default App;
