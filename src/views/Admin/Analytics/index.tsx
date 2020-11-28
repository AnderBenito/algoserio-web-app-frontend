import React from "react";
import RankingPie from "../../../components/RankingPie";
import TotalPointsTimeline from "../../../components/TotalPointsTimeline";

const Analytics = () => {
	return (
		<div className="container mt-2 mb-2">
			Analíticas
			<TotalPointsTimeline />
			<RankingPie />
		</div>
	);
};

export default Analytics;
