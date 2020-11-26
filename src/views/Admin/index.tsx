import React, { lazy } from "react";
import { Route } from "react-router-dom";
import AdminNavBar from "../../components/Admin/AdminNavBar";
import { AdminProvider } from "../../context/AdminProvider";

const AdminHome = lazy(() => import("./AdminHome"));
const Analytics = lazy(() => import("./Analytics"));

const Admin: React.FC = () => {
	return (
		<AdminProvider>
			<AdminNavBar></AdminNavBar>
			<>
				<Route path="/admin" exact component={AdminHome} />
				<Route path="/admin/analytics" exact component={Analytics} />
			</>
		</AdminProvider>
	);
};

export default Admin;
