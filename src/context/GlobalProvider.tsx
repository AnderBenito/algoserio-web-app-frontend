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

export const GlobalContext = createContext<IContextProps>({} as IContextProps);

export const GlobalProvider: React.FC<Props> = (props) => {
	const [userState, userDispatch] = useReducer(userReducer, userInitialState);

	return (
		<GlobalContext.Provider value={{ userState, userDispatch }}>
			{props.children}
		</GlobalContext.Provider>
	);
};
