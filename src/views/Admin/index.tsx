import React, { lazy } from "react";
import { Route } from "react-router-dom";
import AdminNavBar from "../../components/Admin/AdminNavBar";
import { AdminProvider } from "../../context/AdminProvider";

const AddPoints = lazy(() => import("./AddPoints"));
const History = lazy(() => import("./History"));
const Analytics = lazy(() => import("./Analytics"));
const Ranking = lazy(() => import("./Ranking"));

const Admin: React.FC = () => {
	return (
		<AdminProvider>
			<AdminNavBar></AdminNavBar>
			<>
				<Route path="/admin" exact component={AddPoints} />
				<Route path="/admin/history" exact component={History} />
				<Route path="/admin/analytics" exact component={Analytics} />
				<Route path="/admin/ranking" exact component={Ranking} />
			</>
		</AdminProvider>
	);
};

export default Admin;
