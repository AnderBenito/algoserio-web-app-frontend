import React, { lazy } from "react";
import { Route } from "react-router-dom";
import { AdminProvider } from "../../context/AdminProvider";

const AddPointsView = lazy(() => import("./AddPointsView"));
const HistoryView = lazy(() => import("./HistoryView"));
const AnalyticsView = lazy(() => import("./AnalyticsView"));
const RankingView = lazy(() => import("./RankingView"));

const Admin: React.FC = () => {
	return (
		<AdminProvider>
			<>
				<Route path="/admin" exact component={AddPointsView} />
				<Route path="/admin/history" exact component={HistoryView} />
				<Route path="/admin/analytics" exact component={AnalyticsView} />
				<Route path="/admin/ranking" exact component={RankingView} />
			</>
		</AdminProvider>
	);
};

export default Admin;
