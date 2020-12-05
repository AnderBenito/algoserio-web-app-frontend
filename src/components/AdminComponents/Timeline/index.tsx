import React from "react";
import Chart from "react-apexcharts";
import styles from "./index.module.css";

interface Props {
	options: any;
	series: any;
}

const Timeline: React.FC<Props> = (props) => {
	return (
		<div className={styles.chart_wrapper}>
			<Chart options={props.options} series={props.series} type="line" />
		</div>
	);
};

export default Timeline;
