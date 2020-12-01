import React from "react";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import RankingPie from "../../components/RankingPie";
import { useGetTotalPointsPerUSerQuery } from "../../generated/graphql";
function setSeries(arr: any) {
	return arr.map((total: any) => total.totalPoints);
}

function setOptions(arr: any) {
	return {
		yaxis: {
			show: false,
		},
		legend: {
			show: true,
			position: "bottom",
		},
		theme: {
			palette: "palette3",
		},
		chart: {
			height: "100%",
			width: "100%",
			type: "area",
		},
		labels: arr.map((total: any) => total.user.name),
	};
}
const RankingPieContainer: React.FC = () => {
	const { data, loading, error } = useGetTotalPointsPerUSerQuery({
		fetchPolicy: "network-only",
	});

	if (loading) return <LoadingSpinner />;
	else if (error) return <div>Error</div>;
	else if (data) {
		return (
			<RankingPie
				options={setOptions(data.getTotalPointsPerUSer)}
				series={setSeries(data.getTotalPointsPerUSer)}
			/>
		);
	}
	return null;
};

export default RankingPieContainer;
