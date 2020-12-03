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
	headerGroup?: any;
}
export const TableHeaderRow: React.FC<BoxProps & TableHeaderRowProps> = (
	props
) => {
	return (
		<Box as="tr" {...props.headerGroup.getHeaderGroupProps()}>
			{props.headerGroup.headers.map((column: any) => (
				<Box as="th" {...column.getHeaderProps()}>
					{column.render("Header")}
				</Box>
			))}
		</Box>
	);
};

export const TableHead: React.FC<BoxProps> = (props) => {
	const { headerGroups } = useContext(TableContext);
	return (
		<Box as="thead" {...props}>
			{headerGroups.map((headerGroup: any, index: number) =>
				// <TableHeaderRow key={index} headerGroup={headerGroup} />
				React.cloneElement(props.children as any, { key: index, headerGroup })
			)}
		</Box>
	);
};

interface TableBodyRowProps {
	row?: any;
}
export const TableBodyRow: React.FC<BoxProps & TableBodyRowProps> = (props) => {
	return (
		<Box as="tr" {...props.row.getRowProps()}>
			{props.row.cells.map((cell: any) => {
				return (
					<Box as="td" {...cell.getCellProps()}>
						{cell.render("Cell")}
					</Box>
				);
			})}
		</Box>
	);
};

export const TableBody: React.FC<BoxProps> = (props) => {
	const { getTableBodyProps, rows, prepareRow } = useContext(TableContext);
	return (
		<Box as="tbody" {...props} {...getTableBodyProps()}>
			{rows.map((row: any, index: number) => {
				prepareRow(row);
				// return <TableBodyRow key={index} row={row} />;
				return React.cloneElement(props.children as any, { key: index, row });
			})}
		</Box>
	);
};
