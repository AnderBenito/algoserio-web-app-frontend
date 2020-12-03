import { Center, Container } from "@chakra-ui/react";
import React from "react";
import { Table } from "../Table";
import styles from "./index.module.css";

interface Props {
	data: any;
	columns: any;
}

const PointsHistory: React.FC<Props> = ({ columns, data }) => {
	return (
		<Container>
			Historial de puntos
			<Center>
				<Table className={styles.myTable} columns={columns} data={data} />
			</Center>
		</Container>
	);
};

export default PointsHistory;
