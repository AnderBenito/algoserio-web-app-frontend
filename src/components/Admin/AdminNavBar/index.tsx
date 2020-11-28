import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const AdminNavBar: React.FC = () => {
	const [showNav, setShowNav] = useState(false);
	return (
		<div className={styles.nav_wrapper}>
			<div className="container-fluid pt-2 pb-2">
				<FontAwesomeIcon
					className={styles.icon}
					onClick={() => setShowNav(!showNav)}
					icon={!showNav ? faBars : faTimes}
				/>
			</div>
			<AnimatePresence>
				{showNav && (
					<nav>
						<motion.div
							className={styles.nav_sidebar}
							initial={{ x: -200 }}
							animate={{ x: 0 }}
							transition={{ type: "spring", mass: 0.2 }}
							exit={{ x: -200 }}
						>
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link
										className="nav-link"
										onClick={() => setShowNav(false)}
										to="/admin"
									>
										Añadir puntos
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										onClick={() => setShowNav(false)}
										to="/admin/history"
									>
										Historial
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										onClick={() => setShowNav(false)}
										to="/admin/ranking"
									>
										Ranking
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										onClick={() => setShowNav(false)}
										to="/admin/analytics"
									>
										Analytics
									</Link>
								</li>
							</ul>
						</motion.div>
						<motion.div
							onClick={() => setShowNav(false)}
							className={styles.nav_background}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						></motion.div>
					</nav>
				)}
			</AnimatePresence>
		</div>
	);
};

export default AdminNavBar;
