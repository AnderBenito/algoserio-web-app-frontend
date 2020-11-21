import { ApolloClient } from "@apollo/client";

export const logOut = async () => {
	localStorage.removeItem("accessToken");
};
