import { motion } from "framer-motion";
import React from "react";
import styles from "./index.module.css";

interface Props {}
const SideBar: React.FC<Props> = ({ children }) => {
	return (
		<motion.div
			className={styles.nav_sidebar}
			initial={{ x: -200 }}
			animate={{ x: 0 }}
			transition={{ type: "spring", mass: 0.2 }}
			exit={{ x: -200 }}
		>
			<ul>{children}</ul>
		</motion.div>
	);
};

export default SideBar;
