import { Box, BoxProps } from "@chakra-ui/react";
import React, { useContext } from "react";
import { TableProvider, TableContext } from "./context";

interface TableWraperProps {
	data: any;
	columns: any;
}
export const TableWraper: React.FC<TableWraperProps> = ({
	columns,
	data,
	children,
}) => {
	return (
		<TableProvider columns={columns} data={data}>
			{children}
		</TableProvider>
	);
};

export const Table: React.FC<BoxProps> = (props) => {
	const { getTableProps } = useContext(TableContext);

	return (
		<Box as="table" {...props} {...getTableProps()}>
			{props.children}
		</Box>
	);
};

interface TableHeaderRowProps {
	headerGroup: any;
}
export const TableHeaderRow: React.FC<TableHeaderRowProps> = ({
	headerGroup,
}) => {
	return (
		<tr {...headerGroup.getHeaderGroupProps()}>
			{headerGroup.headers.map((column: any) => (
				<th {...column.getHeaderProps()}>{column.render("Header")}</th>
			))}
		</tr>
	);
};

export const TableHead: React.FC<BoxProps> = (props) => {
	const { headerGroups } = useContext(TableContext);
	return (
		<Box as="thead" {...props}>
			{headerGroups.map((headerGroup: any, index: number) => (
				<TableHeaderRow key={index} headerGroup={headerGroup} />
			))}
		</Box>
	);
};

interface TableBodyRowProps {
	row: any;
}
export const TableBodyRow: React.FC<TableBodyRowProps> = ({ row }) => {
	return (
		<tr {...row.getRowProps()}>
			{row.cells.map((cell: any) => {
				return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
			})}
		</tr>
	);
};

export const TableBody: React.FC<BoxProps> = (props) => {
	const { getTableBodyProps, rows, prepareRow } = useContext(TableContext);
	return (
		<Box as="tbody" {...props} {...getTableBodyProps()}>
			{rows.map((row: any, index: number) => {
				prepareRow(row);
				return <TableBodyRow key={index} row={row} />;
			})}
		</Box>
	);
};
