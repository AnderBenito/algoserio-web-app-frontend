import React from "react";
import {
	LineChart,
	Line,
	ResponsiveContainer,
	CartesianGrid,
	XAxis,
	Tooltip,
} from "recharts";
import { useGetAllPointsQuery } from "../../generated/graphql";
import LoadingSpinner from "../Loading/LoadingSpinner";

const dataT = [
	{ date: "2020-11-26T22:10:10.478Z", koldo: "20", ander: "30" },
	{ date: "2020-11-28T22:10:10.478Z", koldo: "10", ander: "0" },
];
const AnalyticsComponent = () => {
	const { data, loading, error } = useGetAllPointsQuery();

	if (loading) return <LoadingSpinner />;
	else if (error) return <div>Error</div>;
	else if (data) {
		console.log(data.getAllPoints);
		return (
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={dataT}>
						<Line type="monotone" dataKey="koldo" stroke="#8884d8" />
						<Line type="monotone" dataKey="ander" stroke="#82ca9d" />
						<CartesianGrid />
						<XAxis dataKey="date" />
						<Tooltip />
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
	}
	return null;
};

export default AnalyticsComponent;
