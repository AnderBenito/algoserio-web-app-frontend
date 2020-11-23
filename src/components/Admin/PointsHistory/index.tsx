import React, { useEffect } from "react";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import TableHistory from "../../Tables/TableHistory";
import { useGetAllPointsQuery } from "../../../generated/graphql";

interface Props {
	refetching?: boolean;
}

const PointsHistory: React.FC<Props> = (props) => {
	const {
		data,
		loading: dataLoading,
		error: dataError,
		refetch,
	} = useGetAllPointsQuery({ fetchPolicy: "network-only" });

	useEffect(() => {
		refetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.refetching]);

	const component = () => {
		return (
			<div className="container mt-2 mb-2">
				<b className="prueba">Historial de TontoPoints:</b>
				<TableHistory data={data?.getAllPoints!} />
			</div>
		);
	};

	if (dataLoading) {
		return <LoadingSpinner />;
	} else if (dataError) {
		return <div>Error</div>;
	} else if (data) {
		return component();
	}

	return null;
};

export default PointsHistory;
