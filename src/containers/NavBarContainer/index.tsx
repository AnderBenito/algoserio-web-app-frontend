import { useApolloClient } from "@apollo/client";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { GlobalContext } from "../../context/GlobalProvider";
import {
	useUserLogoutMutation,
	useGetCurrentUserQuery,
} from "../../generated/graphql";

const NavBarContainer: React.FC = () => {
	const { userState, userDispatch } = useContext(GlobalContext);
	const history = useHistory();
	const client = useApolloClient();

	const [showNav, setShowNav] = useState<boolean>(false);
	const [logoutMutation] = useUserLogoutMutation();
	const { data, loading } = useGetCurrentUserQuery();

	const onLogout = (e: any) => {
		onlogOut(e);
		setShowNav(false);
	};

	const toggleNav = () => {
		setShowNav(!showNav);
	};
	const handleClose = () => {
		setShowNav(false);
	};

	const onlogOut = async (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		event.preventDefault();
		userDispatch({ type: "logout" });
		localStorage.removeItem("accessToken");
		try {
			await logoutMutation();
			await client.resetStore();
		} catch (e) {
			console.log(e);
		}
		history.push("/");
	};
	return (
		<NavBar
			handleClose={handleClose}
			isAdmin={userState.data?.isAdmin!}
			handleLogout={onLogout}
			loading={loading}
			loggedIn={userState.data?.isAdmin!}
			showNav={showNav}
			toggleNav={toggleNav}
			username={data?.getCurrentUser.username}
		/>
	);
};

export default NavBarContainer;
