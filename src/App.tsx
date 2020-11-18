import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
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
