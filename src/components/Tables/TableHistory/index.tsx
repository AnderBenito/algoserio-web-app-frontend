import React from "react";
import moment from "moment";
import styles from "./index.module.css";

interface Props {
	data: any[];
	onRowClick?: (e: any) => any;
	setItem: any;
}

const TableTotal: React.FC<Props> = ({ data, onRowClick, setItem }) => {
	return (
		<>
			<div className={styles.custom_table}>
				<table className="table table-bordered table-striped mb-0">
					<thead className="thead-dark custom-body">
						<tr>
							<th>Dado en:</th>
							<th>Nombre</th>
							<th>Puntos</th>
						</tr>
					</thead>
					<tbody>
						{data?.map((points, index) => {
							const date = moment(points.createdAt!).format("MM-DD-YYYY");
							return (
								<tr
									key={index}
									onClick={(e) => {
										onRowClick!(e);
										setItem(points);
									}}
								>
									<th scope="row">{date}</th>
									<td>{points.user?.name}</td>
									<td>{points.amount}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TableTotal;
