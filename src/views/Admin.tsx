import React from "react";
import AdminComponent from "../components/Admin";
import { AdminProvider } from "../context/AdminProvider";

const Admin: React.FC = () => {
	return (
		<AdminProvider>
			<AdminComponent />
		</AdminProvider>
	);
};

export default Admin;
