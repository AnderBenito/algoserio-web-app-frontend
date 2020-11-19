import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const NavBar = () => {
	return (
		<nav className="border">
			<ul className="p-1">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/auth/register">Register</Link>
				</li>
				<li>
					<Link to="/auth/login">Login</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
