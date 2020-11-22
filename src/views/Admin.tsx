import React from "react";
import AddPoints from "../components/AddPoints";
import PointsHistory from "../components/PointsHistory";

const Admin: React.FC = () => {
	return (
		<div>
			<AddPoints />
			<PointsHistory />
		</div>
	);
};

export default Admin;
