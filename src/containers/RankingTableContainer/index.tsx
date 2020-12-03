import React from "react";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import RankingTable from "../../components/RankingTable";
import { useGetTotalPointsPerUSerQuery } from "../../generated/graphql";

const RankingTableContainer: React.FC = () => {
	const { loading, data, error } = useGetTotalPointsPerUSerQuery();

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
		return <RankingTable columns={columns} data={data.getTotalPointsPerUSer} />;
	}
	return null;
};

export default RankingTableContainer;
