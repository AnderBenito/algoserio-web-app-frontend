import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import NavBar from "./components/NavBar";
import { GlobalContext } from "./context/GlobalProvider";

const App: React.FC = () => {
	const [user, setUser] = useContext(GlobalContext);

	useEffect(() => {
		setUser({
			accessToken: localStorage.getItem("accessToken"),
		});
	}, []);

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
