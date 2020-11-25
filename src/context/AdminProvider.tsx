import React, { useState, createContext } from "react";

interface Props {}

interface IContextProps {
	refetchData: boolean;
	setRefetchData: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdminContext = createContext<IContextProps>({} as any);

export const AdminProvider: React.FC<Props> = (props) => {
	const [refetchData, setRefetchData] = useState<boolean>(false);

	return (
		<AdminContext.Provider value={{ refetchData, setRefetchData }}>
			{props.children}
		</AdminContext.Provider>
	);
};
