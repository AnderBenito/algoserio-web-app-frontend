import React, { lazy } from "react";
import { Route } from "react-router-dom";
import AdminNavBar from "../../components/Admin/AdminNavBar";
import { AdminProvider } from "../../context/AdminProvider";

const AdminComponent = lazy(() => import("../../components/Admin"));
const Analytics = lazy(() => import("./Analytics"));

const Admin: React.FC = () => {
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
