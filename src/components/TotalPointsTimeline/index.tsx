import React, { useEffect } from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";
import Chart from "react-apexcharts";
import { useGetAllUsersQuery } from "../../generated/graphql";
import styles from "./index.module.css";

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

const AnalyticsComponent = () => {
	const { data, loading, error } = useGetAllUsersQuery({
		fetchPolicy: "network-only",
	});

	useEffect(() => {}, [data]);

	if (loading) return <LoadingSpinner />;
	else if (error) return <div>Error</div>;
	else if (data) {
		return (
			<div className={styles.chart_wrapper}>
				<Chart
					options={options}
					series={setSeries(data.getAllUsers)}
					type="line"
				/>
			</div>
		);
	}
	return null;
};

export default AnalyticsComponent;
