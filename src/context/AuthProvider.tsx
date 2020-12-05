import React, { createContext, useReducer } from "react";
import Action from "../models/action.model";
import State from "../models/state.model";
import UserContext from "../models/userState.model";
import userInitialState from "./initialStates/userInitialState";
import userReducer from "./reducers/userReducer";

interface Props {}

interface IContextProps {
	userState: State<UserContext>;

	userDispatch: React.Dispatch<Action>;
}

export const AuthContext = createContext<IContextProps>({} as IContextProps);

export const AuthProvider: React.FC<Props> = (props) => {
	const [userState, userDispatch] = useReducer(userReducer, userInitialState);

	return (
		<AuthContext.Provider value={{ userState, userDispatch }}>
			{props.children}
		</AuthContext.Provider>
	);
};
