import React, { useState } from "react";
import {
	TableWraper,
	Table,
	TableHead,
	TableBody,
} from "../../components/TableComponents";
import "./index.css";

const PointsHistoryContainer: React.FC = () => {
	const [data, setData] = useState([
		{
			col1: "Hello",
			col2: "Mundo",
		},
		{
			col1: "react-table",
			col2: "rocks",
		},
		{
			col1: "whatever",
			col2: "you want",
		},
	]);

	const columns = [
		{
			Header: "Column 1",
			accessor: "col1", // accessor is the "key" in the data
		},
		{
			Header: "Column 2",
			accessor: "col2",
		},
	];

	return (
		<div>
			<button onClick={() => setData([{ col1: "asf", col2: "aa" }])}>
				Clicl
			</button>
			{/* <Table columns={columns} data={data} /> */}
			<TableWraper columns={columns} data={data}>
				<Table border="1px">
					<TableHead />
					<TableBody bg="gray.500" />
				</Table>
			</TableWraper>
		</div>
	);
};

export default PointsHistoryContainer;
