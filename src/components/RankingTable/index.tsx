import { Center, Container } from "@chakra-ui/react";
import React from "react";
import { Table } from "../Table";

interface Props {
	data: any;
	columns: any;
}

const RankingTable: React.FC<Props> = ({ columns, data }) => {
	return (
		<Container>
			<Center>
				<Table columns={columns} data={data} />
			</Center>
		</Container>
	);
};

export default RankingTable;
