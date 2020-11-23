import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useGetTotalPointsPerUSerQuery } from "../../../generated/graphql";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import TableTotal from "../../Tables/TableTotal";

interface Props {
	refetching?: boolean;
}

const TotalPointsTable: React.FC<Props> = (props) => {
	const { data, loading, error, refetch } = useGetTotalPointsPerUSerQuery();

	useEffect(() => {
		refetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.refetching]);

	const history = useHistory();
	if (loading) {
		return <LoadingSpinner />;
	} else if (error) {
		history.push("/");
		return <div>Error</div>;
	} else if (data) {
		return (
			<div className="container mt-2">
				<b>Ranking de puntos totales</b>
				<TableTotal data={data?.getTotalPointsPerUSer} />
			</div>
		);
	}

	return null;
};

export default TotalPointsTable;
