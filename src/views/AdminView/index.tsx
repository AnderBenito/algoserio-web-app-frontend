import React, { lazy } from "react";
import { Route } from "react-router-dom";
import { AdminProvider } from "../../context/AdminProvider";

const AddPointsView = lazy(() => import("./AddPointsView"));
const HistoryView = lazy(() => import("./HistoryView"));
const AnalyticsView = lazy(() => import("./AnalyticsView"));
const RankingView = lazy(() => import("./RankingView"));
const GalasView = lazy(() => import("./GalasView"));

const AdminView: React.FC = () => {
	return (
		<AdminProvider>
			<Route path="/admin/galas" exact component={GalasView} />
			<Route path="/admin/:galaId/add" exact component={AddPointsView} />
			<Route path="/admin/:galaId/history" exact component={HistoryView} />
			<Route path="/admin/:galaId/analytics" exact component={AnalyticsView} />
			<Route path="/admin/:galaId/ranking" exact component={RankingView} />
		</AdminProvider>
	);
};

export default AdminView;
