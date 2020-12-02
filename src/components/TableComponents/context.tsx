import React, { useMemo, createContext } from "react";
import { useTable } from "react-table";

interface Props {
	data: any;
	columns: any;
}

interface IContextProps {
	getTableProps: any;
	getTableBodyProps: any;
	headerGroups: any;
	rows: any;
	prepareRow: any;
}

export const TableContext = createContext<IContextProps>({} as IContextProps);

export const TableProvider: React.FC<Props> = ({ columns, data, children }) => {
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
		<TableContext.Provider
			value={{
				getTableProps,
				getTableBodyProps,
				headerGroups,
				rows,
				prepareRow,
			}}
		>
			{children}
		</TableContext.Provider>
	);
};
