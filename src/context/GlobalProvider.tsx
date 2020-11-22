import React, { createContext, useState } from "react";
import UserContext from "../models/userContext.model";

interface Props {}

interface IContextProps {
	user: UserContext;
	setUser: React.Dispatch<React.SetStateAction<UserContext>>;
}

export const GlobalContext = createContext<IContextProps>({} as IContextProps);

export const GlobalProvider: React.FC<Props> = (props) => {
	const [user, setUser] = useState<UserContext>({
		loggedIn: false,
		isAdmin: false,
	});

	return (
		<GlobalContext.Provider value={{ user, setUser }}>
			{props.children}
		</GlobalContext.Provider>
	);
};
