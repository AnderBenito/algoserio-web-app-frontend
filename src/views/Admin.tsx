import React from "react";
import { Route } from "react-router-dom";
import AdminComponent from "../components/Admin";
import AdminNavBar from "../components/Admin/AdminNavBar";
import { AdminProvider } from "../context/AdminProvider";
import Analytics from "./admin/Analytics";

const Admin: React.FC<any> = ({ match }) => {
	return (
		<AdminProvider>
			<AdminNavBar></AdminNavBar>
			<>
				<Route path="/admin" exact component={AdminComponent} />
				<Route path="/admin/analytics" exact component={Analytics} />
			</>
		</AdminProvider>
	);
};

export default Admin;
