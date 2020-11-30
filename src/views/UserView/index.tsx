import React from "react";
import { RouteComponentProps } from "react-router-dom";
import UserContainer from "../../containers/UserContainer";

const UserView: React.FC<RouteComponentProps> = (props) => {
	return <UserContainer />;
};

export default UserView;
