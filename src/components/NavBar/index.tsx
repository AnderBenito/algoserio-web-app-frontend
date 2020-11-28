import { useApolloClient } from "@apollo/client";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalProvider";
import {
	useGetCurrentUserQuery,
	useUserLogoutMutation,
} from "../../generated/graphql";
import styles from "./index.module.css";

const NavBar: React.FC = (props) => {
	const { userState, userDispatch } = useContext(GlobalContext);
	const history = useHistory();
	const client = useApolloClient();

	const [logoutMutation] = useUserLogoutMutation();
	const { data, loading } = useGetCurrentUserQuery();

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

	const adminLink = () => {
		if (!userState.data) return null;
		if (userState.data.isAdmin) {
			return (
				<li className="nav-item">
					<Link className="nav-link" to="/admin">
						Admin
					</Link>
				</li>
			);
		} else {
			return null;
		}
	};

	const navComponent = () => {
		if (userState.data?.loggedIn) {
			return (
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to="/user">
							{!loading && data?.getCurrentUser.username}
						</Link>
					</li>
					{adminLink()}
					<li className="nav-item">
						<div className="nav-link" onClick={onlogOut}>
							Cerrar Sesión
						</div>
					</li>
				</ul>
			);
		} else {
			return (
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to="/auth/register">
							Regístrate
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/auth/login">
							Iniciar Sesión
						</Link>
					</li>
				</ul>
			);
		}
	};

	return (
		<nav
			className={`navbar navbar-expand-sm navbar-dark bg-dark ${styles.navbar_wrapper}`}
		>
			<span className="navbar-text">
				<Link className="nav-link" to="/">
					AlgoSerio &#8482;
				</Link>
			</span>
			{navComponent()}
		</nav>
	);
};

export default NavBar;
