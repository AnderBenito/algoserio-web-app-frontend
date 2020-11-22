import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { GlobalContext } from "./context/GlobalProvider";
import { routes } from "./routes";

const RouteComponent: React.FC<any> = (route: typeof routes[0]) => {
	const { user } = useContext(GlobalContext);
	const component = () => {
		return <Route render={(props) => <route.component {...props} />} />;
	};

	if (!route.needsAuth) {
		return component();
	} else {
		return user.isAdmin ? component() : <Redirect to="/" />;
	}
};

const RoutesComponent: React.FC = () => {
	return (
		<Switch>
			{routes.map((route, index) => (
				<RouteComponent key={index} {...route} />
			))}
		</Switch>
	);
};

export default RoutesComponent;
