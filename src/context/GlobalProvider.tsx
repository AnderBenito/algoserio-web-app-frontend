import React, { createContext, useState } from "react";

interface User {
	accessToken: string;
}

export const GlobalContext = createContext<any>({});

export const GlobalProvider: React.FC = (props) => {
	const [user, setUser] = useState<User>({
		accessToken: "",
	});

	return (
		<GlobalContext.Provider value={[user, setUser]}>
			{props.children}
		</GlobalContext.Provider>
	);
};
