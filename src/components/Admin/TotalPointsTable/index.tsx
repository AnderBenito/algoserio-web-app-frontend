import React from "react";
import { useHistory } from "react-router-dom";
import { useGetTotalPointsPerUSerQuery } from "../../../generated/graphql";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import TableTotal from "../../Tables/TableTotal";

interface Props {}

const TotalPointsTable: React.FC<Props> = () => {
	const { data, loading, error } = useGetTotalPointsPerUSerQuery();

	const history = useHistory();
	if (loading) {
		return <LoadingSpinner />;
	} else if (error) {
		history.push("/");
		return <div>Error</div>;
	} else if (data) {
		return <TableTotal data={data?.getTotalPointsPerUSer} />;
	}

	return null;
};

export default TotalPointsTable;
