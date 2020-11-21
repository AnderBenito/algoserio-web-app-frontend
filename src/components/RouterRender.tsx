import React from "react";
import { Route } from "react-router-dom";

const RouterRender: React.FC<any> = (route) => {
	return <Route path={route.path} exact component={route.component}></Route>;
};

export default RouterRender;
