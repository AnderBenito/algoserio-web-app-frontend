import React, { lazy, Suspense, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { GlobalContext } from "../../context/GlobalProvider";

const Admin = lazy(() => import("../../views/Admin"));
const Home = lazy(() => import("../../views/Home"));
const Login = lazy(() => import("../../views/Login"));
const Register = lazy(() => import("../../views/Register"));
const UserProfile = lazy(() => import("../../views/User"));

// const RouteComponent: React.FC<any> = (route: typeof routes[0]) => {
// 	const { user } = useContext(GlobalContext);
// 	const component = () => {
// 		return <Route render={(props) => <route.component {...props} />} />;
// 	};

// 	if (!route.needsAuth) {
// 		return component();
// 	} else {
// 		return user.isAdmin ? component() : <Redirect to="/" />;
// 	}
// };

const PrivateRoute: React.FC<any> = ({ ...props }) => {
	const { userState } = useContext(GlobalContext);
	if (!userState.data?.isAdmin) return <Redirect to="/" />;
	return <Route {...props} />;
};

const RoutesComponent: React.FC = () => {
	return (
		<Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/auth/login" component={Login} />
				<Route exact path="/auth/register" component={Register} />
				<Route exact path="/user" component={UserProfile} />
				<PrivateRoute path="/admin" component={Admin} />
			</Switch>
		</Suspense>
	);
};

export default RoutesComponent;
