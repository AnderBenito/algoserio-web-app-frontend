import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "./context/AuthProvider";
import { setAccessToken } from "./utils/accessToken";
import fetchRequestToken from "./utils/fetchRequestToken";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import jwtDecode from "jwt-decode";
import RoutesComponent from "./components/RoutesComponent";
import NavBarContainer from "./containers/NavBarContainer";
import { useGetAllGalasQuery } from "./generated/graphql";
import { GalaContext } from "./context/GalaProvider";

interface Props {}

const App: React.FC<Props> = () => {
	const { data, loading } = useGetAllGalasQuery();
	const { userState, userDispatch } = useContext(AuthContext);

	const { galaDispatch } = useContext(GalaContext);

	useEffect(
		() => {
			console.log("APP MOUNTED");
			userDispatch({ type: "login_in" });

			fetchRequestToken()
				.then((data) => {
					if (data.accessToken) {
						setAccessToken(data.accessToken);
						const { isAdmin } = jwtDecode(data.accessToken) as any;
						userDispatch({ type: "login_success", payload: { isAdmin } });
					} else {
						userDispatch({ type: "login_error" });
					}
				})
				.catch((error) => {
					console.log(error);
					userDispatch({ type: "login_error" });
				});
		}, // eslint-disable-next-line
		[]
	);

	useEffect(() => {
		if (data) {
			galaDispatch({
				type: "set_gala",
				payload: { id: data.getAllGalas[0].id, name: data.getAllGalas[0].name },
			});
		}
	}, [data, galaDispatch]);

	if (userState.isLoading || loading) {
		return <LoadingSpinner />;
	}

	return (
		<div className="App">
			<Router>
				<NavBarContainer />
				<RoutesComponent />
			</Router>
		</div>
	);
};

export default App;
