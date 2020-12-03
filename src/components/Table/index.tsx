import React, { useMemo } from "react";
import { useTable } from "react-table";

interface Props {
	columns: any;
	data: any;
}

export const Table: React.FC<Props & any> = ({ columns, data, ...rest }) => {
	const memoData = useMemo(() => data, [data]);
	const memoColumns = useMemo(() => columns, [columns]);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns: memoColumns, data: memoData });

	return (
		<table {...rest} {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render("Header")}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
