import moment from "moment";
import React, { useContext } from "react";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import PointsHistory from "../../components/AdminComponents/PointsHistory";
import { useGetAllGalaPointsQuery } from "../../generated/graphql";
import { GalaContext } from "../../context/GalaProvider";

const PointsHistoryContainer: React.FC = () => {
	const { galaState } = useContext(GalaContext);
	const { data, loading, error } = useGetAllGalaPointsQuery({
		variables: {
			id: galaState.data!.id,
		},
	});

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
			Header: "Cantidad",
			accessor: "amount",
		},
	];

	if (loading) return <LoadingSpinner />;
	if (error) return <div>Error</div>;
	else if (data) {
		return (
			<PointsHistory columns={columns} data={data.getAllGalaPoints.points} />
		);
	}
	return null;
};

export default PointsHistoryContainer;
