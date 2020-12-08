import { Center, Container } from "@chakra-ui/react";
import React from "react";
import EditPointsContainer from "../../../containers/EditPointsContainer";
import { Table } from "../../Table";
import styles from "./index.module.css";

interface Props {
	data: any;
	columns: any;
	modalIsOpen: any;
	modalOnClose: any;
	point: any;
}

const PointsHistory: React.FC<Props> = ({
	columns,
	data,
	modalOnClose,
	modalIsOpen,
	point,
}) => {
	return (
		<Container>
			Historial de puntos
			<Center>
				<Table className={styles.myTable} columns={columns} data={data} />
			</Center>
			{modalIsOpen && (
				<EditPointsContainer
					modalIsOpen={modalIsOpen}
					modalOnClose={modalOnClose}
					point={point}
				/>
			)}
		</Container>
	);
};

export default PointsHistory;
