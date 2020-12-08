import { Container } from "@chakra-ui/react";
import React from "react";
import Chart from "react-apexcharts";
import styles from "./index.module.css";

interface Props {
	options: any;
	series: any;
}

const Timeline: React.FC<Props> = (props) => {
	return (
		<Container className={styles.chart_wrapper}>
			<Chart options={props.options} series={props.series} type="line" />
		</Container>
	);
};

export default Timeline;
