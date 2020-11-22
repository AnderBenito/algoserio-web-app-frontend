import React from "react";
import "./index.css";

const LoadingSpinner: React.FC = () => {
	return (
		<div className="centered">
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default LoadingSpinner;
