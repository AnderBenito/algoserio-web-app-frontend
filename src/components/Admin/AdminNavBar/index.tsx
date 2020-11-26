import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const AdminNavBar: React.FC = () => {
	const [showNav, setShowNav] = useState(false);
	return (
		<div className={styles.nav_wrapper}>
			<button onClick={() => setShowNav(!showNav)}>Show</button>
			<AnimatePresence>
				{showNav && (
					<>
						<motion.div
							className={styles.nav_sidebar}
							initial={{ x: -200 }}
							animate={{ x: 0 }}
							exit={{ x: -200 }}
						>
							<ul>
								<li>
									<Link onClick={() => setShowNav(false)} to="/admin">
										Admin
									</Link>
								</li>
								<li>
									<Link onClick={() => setShowNav(false)} to="/admin/analytics">
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
					</>
				)}
			</AnimatePresence>
		</div>
	);
};

export default AdminNavBar;
