import React from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import RankingPie from "../../components/RankingPie";
import { useGetGalaTotalPointsQuery } from "../../generated/graphql";
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
	const { galaId } = useParams<any>();
	const { data, loading, error } = useGetGalaTotalPointsQuery({
		variables: { id: galaId },
		fetchPolicy: "network-only",
	});

	if (loading) return <LoadingSpinner />;
	else if (error) return <div>Error</div>;
	else if (data) {
		return (
			<RankingPie
				options={setOptions(data.getGalaTotalPoints)}
				series={setSeries(data.getGalaTotalPoints)}
			/>
		);
	}
	return null;
};

export default RankingPieContainer;
