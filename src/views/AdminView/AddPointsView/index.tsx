import React from "react";
import { RouteComponentProps } from "react-router-dom";
import AddPointsContainer from "../../../containers/AddPointsContainer";

const AddPointsView: React.FC<RouteComponentProps> = (props) => {
	return <AddPointsContainer history={props.history} match={props.match} />;
};

export default AddPointsView;
