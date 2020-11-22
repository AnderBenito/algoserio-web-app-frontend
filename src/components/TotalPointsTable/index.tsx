import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
	GetTotalPointsPerUSer,
	GET_TOTAL_POINTS_PER_USER,
} from "../../graphql/queries/UserQueries";
import LoadingSpinner from "../LoadingSpinner";
import "./index.css";

interface Props {
	refetching?: boolean;
}

const TotalPointsTable: React.FC<Props> = (props) => {
	const { data, loading, error, refetch } = useQuery<GetTotalPointsPerUSer>(
		GET_TOTAL_POINTS_PER_USER
	);

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
				<div className="custom-table">
					<table className="table table-striped ">
						<thead className="thead-dark">
							<tr>
								<th scope="col">Nombre</th>
								<th scope="col">Total de puntos</th>
							</tr>
						</thead>
						<tbody>
							{data?.getTotalPointsPerUSer.map((points, index) => {
								return (
									<tr key={index}>
										<td>{points.user.name}</td>
										<td>{points.totalPoints}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}

	return null;
};

export default TotalPointsTable;
