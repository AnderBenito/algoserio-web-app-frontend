import React from "react";
import Chart from "react-apexcharts";

interface Props {
	options: any;
	series: any;
}

const RankingPie: React.FC<Props> = (props) => {
	return (
		<div>
			<Chart options={props.options} series={props.series} type="pie" />
		</div>
	);
};

export default RankingPie;
