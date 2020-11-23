import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminProvider";
import AddPoints from "./AddPoints";
import PointsHistory from "./PointsHistory";
import TotalPointsTable from "./TotalPointsTable";

const AdminComponent: React.FC = () => {
	const { refetchData } = useContext(AdminContext);
	const [refetching, setRefetching] = useState<boolean>(false);

	useEffect(() => {
		setRefetching(!refetching);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refetchData]);

	return (
		<>
			<AddPoints />
			<TotalPointsTable refetching={refetching} />
			<PointsHistory refetching={refetching} />
		</>
	);
};

export default AdminComponent;
