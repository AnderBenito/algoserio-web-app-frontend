import React, { lazy, Suspense, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { GlobalContext } from "../../context/GlobalProvider";

const AdminView = lazy(() => import("../../views/AdminView"));
const HomeView = lazy(() => import("../../views/HomeView"));
const LoginView = lazy(() => import("../../views/LoginView"));
const RegisterView = lazy(() => import("../../views/RegisterView"));
const UserView = lazy(() => import("../../views/UserView"));

const PrivateRoute: React.FC<any> = ({ ...props }) => {
	const { userState } = useContext(GlobalContext);
	if (!userState.data?.isAdmin) return <Redirect to="/" />;
	return <Route {...props} />;
};

const RoutesComponent: React.FC = () => {
	return (
		<Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
			<Switch>
				<Route exact path="/" component={HomeView} />
				<Route exact path="/auth/login" component={LoginView} />
				<Route exact path="/auth/register" component={RegisterView} />
				<Route exact path="/user" component={UserView} />
				<PrivateRoute path="/admin" component={AdminView} />
			</Switch>
		</Suspense>
	);
};

export default RoutesComponent;
