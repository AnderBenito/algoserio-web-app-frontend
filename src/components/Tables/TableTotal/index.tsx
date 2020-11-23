import React from "react";
import styles from "./index.module.css";

interface Props {
	data: any[];
}

const TableTotal: React.FC<Props> = ({ data }) => {
	return (
		<div className={styles.custom_table}>
			<table className="table table-striped ">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Total de puntos</th>
					</tr>
				</thead>
				<tbody>
					{data.map((points, index) => {
						return (
							<tr key={index}>
								<td>{points.user.name}</td>
								<td>{points.totalPoints}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TableTotal;
