import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import {
	GetPointsQuery,
	GET_ALL_POINTS,
} from "../../graphql/queries/PointsQueries";
import LoadingSpinner from "../LoadingSpinner";
import "./index.css";
import moment from "moment";

interface Props {
	refetching?: boolean;
}

const PointsHistory: React.FC<Props> = (props) => {
	const {
		data,
		loading: dataLoading,
		error: dataError,
		refetch,
	} = useQuery<GetPointsQuery>(GET_ALL_POINTS, {
		fetchPolicy: "network-only",
	});

	useEffect(() => {
		refetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.refetching]);

	const component = () => {
		return (
			<div className="container mt-2 mb-2">
				<b className="prueba">Historial de TontoPoints:</b>
				<div className="custom-table-history">
					<table className="table table-bordered table-striped mb-0">
						<thead className="thead-dark custom-body">
							<tr>
								<th>Dado en:</th>
								<th>Nombre</th>
								<th>Puntos</th>
							</tr>
						</thead>
						<tbody className=" custom-body">
							{data?.getAllPoints.map((points, index) => {
								const date = moment(points.createdAt!).format("MM-DD-YYYY");
								return (
									<tr onClick={(e) => console.log(points)} key={index}>
										<th scope="row">{date}</th>
										<td>{points.user?.name}</td>
										<td>{points.amount}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
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
