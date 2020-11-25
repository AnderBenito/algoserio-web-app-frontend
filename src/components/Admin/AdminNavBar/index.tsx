import React from "react";
import { Link } from "react-router-dom";

const AdminNavBar: React.FC = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/admin">Admin</Link>
				</li>
				<li>
					<Link to="/admin/analytics">Analytics</Link>
				</li>
			</ul>
		</div>
	);
};

export default AdminNavBar;
