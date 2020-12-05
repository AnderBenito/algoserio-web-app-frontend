import React, { createContext, useReducer } from "react";
import Action from "../models/action.model";
import GalaStateData from "../models/galaState.mode";
import State from "../models/state.model";
import galaInitialState from "./initialStates/galaInitialState";
import galaReducer from "./reducers/galaReducer";

interface IContextProps {
	galaState: State<GalaStateData>;
	galaDispatch: React.Dispatch<Action>;
}

export const GalaContext = createContext<IContextProps>({} as IContextProps);

export const GalaProvider: React.FC = (props) => {
	const [galaState, galaDispatch] = useReducer(galaReducer, galaInitialState);
	return (
		<GalaContext.Provider value={{ galaState, galaDispatch }}>
			{props.children}
		</GalaContext.Provider>
	);
};
