import React from "react";
import styles from "./index.module.css";

const LoadingSpinner: React.FC = () => {
	return (
		<div className={styles.centered}>
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default LoadingSpinner;
