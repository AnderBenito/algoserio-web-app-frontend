import { Center, Container } from "@chakra-ui/react";
import React from "react";
import { Table } from "../Table";
import styles from "./index.module.css";

interface Props {
	data: any;
	columns: any;
}

const RankingTable: React.FC<Props> = ({ columns, data }) => {
	return (
		<Container>
			<Center>
				<Table className={styles.rankingTable} columns={columns} data={data} />
			</Center>
		</Container>
	);
};

export default RankingTable;
