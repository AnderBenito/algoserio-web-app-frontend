import React from "react";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import Timeline from "../../components/AdminComponents/Timeline";
import { useGetAllUsersQuery } from "../../generated/graphql";
const options = {
	xaxis: {
		type: "datetime",
	},
	yaxis: {
		show: false,
	},
	stroke: {
		curve: "smooth",
	},
	theme: {
		palette: "palette3",
	},
	chart: {
		toolbar: {
			tools: {
				download: false,
			},
		},
		height: "100%",
		width: "100%",
		type: "area",
		animations: {
			enabled: true,
			easing: "easeout",
			speed: 500,
			animateGradually: {
				enabled: true,
				delay: 50,
			},
			dynamicAnimation: {
				enabled: true,
				speed: 350,
			},
		},
	},
};

function setSeries(arr: any) {
	return arr.map((user: any) => {
		return {
			name: user.name,
			data: user.points.map((point: any) => {
				return {
					x: point.createdAt,
					y: point.amount,
				};
			}),
		};
	});
}
const TimelineContainer: React.FC = () => {
	const { data, loading, error } = useGetAllUsersQuery({
		fetchPolicy: "network-only",
	});

	if (loading) return <LoadingSpinner />;
	else if (error) return <div>Error</div>;
	else if (data) {
		return <Timeline options={options} series={setSeries(data.getAllUsers)} />;
	}
	return null;
};

export default TimelineContainer;
