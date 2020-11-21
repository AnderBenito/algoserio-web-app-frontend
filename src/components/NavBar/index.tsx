import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalProvider";
import "./index.css";
const NavBar: React.FC = (props) => {
	const [user, setUser] = useContext(GlobalContext);
	const history = useHistory();

	const logOut = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.preventDefault();
		setUser({
			accessToken: "",
		});
		localStorage.removeItem("accessToken");
		history.push("/");
	};
	const navComponent = () => {
		if (user.accessToken) {
			return (
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to="/user">
							Mi Usuario
						</Link>
					</li>
					<li className="nav-item">
						<div className="nav-link" onClick={logOut}>
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
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
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
