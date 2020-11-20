import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<span className="navbar-text">
				<Link className="nav-link" to="/">
					AlgoSerio &#8482;
				</Link>
			</span>
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
		</nav>
	);
};

export default NavBar;
