import { useApolloClient } from "@apollo/client";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalProvider";
import {
	useGetCurrentUserQuery,
	useUserLogoutMutation,
} from "../../generated/graphql";
import SideBar from "../SideBar";
import styles from "./index.module.css";

const NavBar: React.FC = (props) => {
	const { userState, userDispatch } = useContext(GlobalContext);
	const history = useHistory();
	const client = useApolloClient();

	const [showNav, setShowNav] = useState<boolean>(false);
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

	return (
		<>
			<div className={styles.navbar_wrapper}>
				<ul>
					<li>
						<div>
							<FontAwesomeIcon
								onClick={() => setShowNav(!showNav)}
								icon={!showNav ? faBars : faTimes}
							/>
						</div>
					</li>
				</ul>
				<span>
					<Link className={styles.navbar_title} to="/">
						AlgoSerio &#8482;
					</Link>
				</span>
			</div>
			<AnimatePresence>
				{showNav && (
					<SideBar>
						{userState.data?.loggedIn ? (
							<>
								<li>
									<Link onClick={() => setShowNav(false)} to="/user">
										{!loading && data?.getCurrentUser.username}
									</Link>
								</li>
								<li>
									<div
										onClick={(e) => {
											onlogOut(e);
											setShowNav(false);
										}}
									>
										Cerrar Sesión
									</div>
								</li>
							</>
						) : (
							<>
								<li>
									<Link onClick={() => setShowNav(false)} to="/auth/register">
										Regístrate
									</Link>
								</li>
								<li>
									<Link onClick={() => setShowNav(false)} to="/auth/login">
										Iniciar Sesión
									</Link>
								</li>
							</>
						)}
						{userState.data?.isAdmin && (
							<>
								<li>
									<Link onClick={() => setShowNav(false)} to="/admin">
										Añadir puntos
									</Link>
								</li>
								<li>
									<Link onClick={() => setShowNav(false)} to="/admin/history">
										Historial
									</Link>
								</li>
								<li>
									<Link onClick={() => setShowNav(false)} to="/admin/ranking">
										Ranking
									</Link>
								</li>
								<li>
									<Link onClick={() => setShowNav(false)} to="/admin/analytics">
										Analytics
									</Link>
								</li>
							</>
						)}
					</SideBar>
				)}
			</AnimatePresence>
		</>
	);
};

export default NavBar;
