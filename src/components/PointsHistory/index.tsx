import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import {
	GetPointsQuery,
	GET_ALL_POINTS,
} from "../../graphql/queries/PointsQueries";
import LoadingSpinner from "../LoadingSpinner";
import "./index.css";
import moment from "moment";

const PointsHistory: React.FC = () => {
	const {
		data,
		loading: dataLoading,
		error: dataError,
	} = useQuery<GetPointsQuery>(GET_ALL_POINTS, {
		fetchPolicy: "network-only",
	});

	useEffect(() => {}, [data]);

	const component = () => {
		return (
			<div className="container mt-2 ">
				<b>Historial de TontoPoints:</b>
				<table className="table table-striped ">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Dado en:</th>
							<th scope="col">Nombre</th>
							<th scope="col">Puntos</th>
							<th scope="col">Razón</th>
						</tr>
					</thead>
					<tbody>
						{data?.getAllPoints.map((points, index) => {
							const date = moment(points.createdAt!).format("MM-DD-YYYY");
							return (
								<tr key={index}>
									<th scope="row">{date}</th>
									<td>{points.user?.name}</td>
									<td>{points.amount}</td>
									<td>{points.reason}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
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
