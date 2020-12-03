import moment from "moment";
import React from "react";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import PointsHistory from "../../components/PointsHistory";
import { useGetAllPointsQuery } from "../../generated/graphql";

const PointsHistoryContainer: React.FC = () => {
	const { data, loading, error } = useGetAllPointsQuery();

	const columns = [
		{
			Header: "Dados en",
			accessor: (row: any) => {
				return moment(row.createdAt!).format("MM-DD-YYYY");
			}, // accessor is the "key" in the data
		},
		{
			Header: "A",
			accessor: "user.name",
		},
		{
			Header: "Razón",
			accessor: "reason",
		},
	];

	if (loading) return <LoadingSpinner />;
	if (error) return <div>Error</div>;
	else if (data) {
		return <PointsHistory columns={columns} data={data.getAllPoints} />;
	}
	return null;
};

export default PointsHistoryContainer;
