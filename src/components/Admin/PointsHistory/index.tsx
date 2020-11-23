import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import TableHistory from "../../Tables/TableHistory";
import { useGetPaginatedPointsQuery } from "../../../generated/graphql";

interface Props {
	refetching?: boolean;
}

const PointsHistory: React.FC<Props> = (props) => {
	const [page, setPage] = useState({
		page: 0,
		total: 5,
	});
	const {
		data,
		loading: dataLoading,
		error: dataError,
		refetch,
	} = useGetPaginatedPointsQuery({
		variables: { take: page.total, skip: page.page * page.total },
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
				<TableHistory data={data?.getPaginatedPoints!} />
				<nav aria-label="Page navigation example">
					<ul className="pagination">
						<li className="page-item">
							<button
								onClick={(e) =>
									setPage({
										...page,
										page: page.page > 0 ? page.page - 1 : 0,
									})
								}
								className="page-link"
							>
								Previous
							</button>
						</li>

						<li className="page-item">
							<button
								onClick={(e) =>
									setPage({
										...page,
										page: page.page + 1,
									})
								}
								className="page-link"
							>
								Next
							</button>
						</li>
					</ul>
				</nav>
			</div>
		);
	};

	if (dataLoading) {
		if (data) {
			return component();
		} else {
			<LoadingSpinner />;
		}
	} else if (dataError) {
		return <div>Error</div>;
	} else if (data) {
		return component();
	}

	return null;
};

export default PointsHistory;
