import React, { useState } from "react";
import AddPointsForm from "../../../components/AddPointsForm";
import PointsHistory from "../../../components/PointsHistory";
import { useGetPaginatedPointsQuery } from "../../../generated/graphql";

const AdminHome = () => {
	const [page, setPage] = useState({
		page: 0,
		total: 5,
	});
	const { data, loading, error, refetch } = useGetPaginatedPointsQuery({
		variables: { take: page.total, skip: page.page * page.total },
	});

	const handleRefetch = async () => {
		console.log("submited");
		await refetch();
	};

	return (
		<div className="container">
			<AddPointsForm handleRefetch={handleRefetch} />
			{!loading && !error && data && (
				<PointsHistory
					points={data.getPaginatedPoints}
					page={page}
					setPage={setPage}
					handleRefetch={handleRefetch}
				/>
			)}
		</div>
	);
};

export default AdminHome;
