import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar";
import styles from "./index.module.css";

interface Props {
	handleClose: any;
	toggleNav: any;
	handleLogout: any;
	isAdmin: boolean;
	loggedIn: boolean;
	showNav: boolean;
	loading: boolean;
	username: any;
	gala: any;
}
const NavBar: React.FC<Props> = ({
	handleClose,
	isAdmin,
	loggedIn,
	showNav,
	loading,
	handleLogout,
	toggleNav,
	username,
	gala,
}) => {
	return (
		<>
			<div className={styles.navbar_wrapper}>
				<ul>
					<li>
						<div>
							<FontAwesomeIcon
								onClick={toggleNav}
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
						{loggedIn ? (
							<>
								<li>
									<Link onClick={handleClose} to="/user">
										{!loading && username}
									</Link>
								</li>
								<li>
									<div onClick={handleLogout}>Cerrar Sesión</div>
								</li>
							</>
						) : (
							<>
								<li>
									<Link onClick={handleClose} to="/auth/register">
										Regístrate
									</Link>
								</li>
								<li>
									<Link onClick={handleClose} to="/auth/login">
										Iniciar Sesión
									</Link>
								</li>
							</>
						)}
						{isAdmin && (
							<>
								<li>
									<Link onClick={handleClose} to={`/admin/${gala.id}/add`}>
										Añadir puntos
									</Link>
								</li>
								<li>
									<Link onClick={handleClose} to={`/admin/${gala.id}/history`}>
										Historial
									</Link>
								</li>
								<li>
									<Link onClick={handleClose} to={`/admin/${gala.id}/ranking`}>
										Ranking
									</Link>
								</li>
								<li>
									<Link
										onClick={handleClose}
										to={`/admin/${gala.id}/analytics`}
									>
										Analytics
									</Link>
								</li>
								<li>
									<Link onClick={handleClose} to="/admin/galas/add-gala">
										Añadir gala
									</Link>
								</li>
								<li>
									<Link onClick={handleClose} to="/admin/galas">
										{gala.name}
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
