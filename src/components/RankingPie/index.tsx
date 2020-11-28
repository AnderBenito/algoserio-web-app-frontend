import React from "react";
import { useGetTotalPointsPerUSerQuery } from "../../generated/graphql";
import LoadingSpinner from "../Loading/LoadingSpinner";
import Chart from "react-apexcharts";

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

const RankingPie: React.FC = () => {
	const { data, loading, error } = useGetTotalPointsPerUSerQuery({
		fetchPolicy: "network-only",
	});

	if (loading) return <LoadingSpinner />;
	else if (error) return <div>Error</div>;
	else if (data) {
		return (
			<div>
				<Chart
					options={setOptions(data.getTotalPointsPerUSer)}
					series={setSeries(data.getTotalPointsPerUSer)}
					type="pie"
				/>
			</div>
		);
	}
	return null;
};

export default RankingPie;
