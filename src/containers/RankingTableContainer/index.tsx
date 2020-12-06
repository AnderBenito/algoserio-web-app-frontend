import React from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import RankingTable from "../../components/RankingTable";
import { useGetGalaTotalPointsQuery } from "../../generated/graphql";

const RankingTableContainer: React.FC = () => {
	const { galaId } = useParams<any>();
	const { loading, data, error } = useGetGalaTotalPointsQuery({
		variables: { id: galaId },
	});

	const columns = [
		{
			Header: "Usuario",
			accessor: "user.name",
		},
		{
			Header: "Total",
			accessor: "totalPoints",
		},
	];

	if (loading) return <LoadingSpinner />;
	else if (error) return <div>Error</div>;
	else if (data) {
		return <RankingTable columns={columns} data={data.getGalaTotalPoints} />;
	}
	return null;
};

export default RankingTableContainer;
