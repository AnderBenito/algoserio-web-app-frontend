import React, { createContext, useState } from "react";

interface User {
	loggedIn: boolean;
}

export const GlobalContext = createContext<any>({});

export const GlobalProvider: React.FC = (props) => {
	const [user, setUser] = useState<User>({
		loggedIn: false,
	});

	return (
		<GlobalContext.Provider value={[user, setUser]}>
			{props.children}
		</GlobalContext.Provider>
	);
};
