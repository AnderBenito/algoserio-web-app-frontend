import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContext } from "./context/GlobalProvider";
import { setAccessToken } from "./utils/accessToken";
import fetchRequestToken from "./utils/fetchRequestToken";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import jwtDecode from "jwt-decode";
import RoutesComponent from "./components/RoutesComponent";
import NavBarContainer from "./containers/NavBarContainer";

interface Props {}

const App: React.FC<Props> = () => {
	const { userState, userDispatch } = useContext(GlobalContext);

	useEffect(
		() => {
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

	if (userState.isLoading) {
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
