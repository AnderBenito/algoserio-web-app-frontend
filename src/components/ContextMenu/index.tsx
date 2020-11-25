import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "./index.module.css";

interface MousePos {
	x: number;
	y: number;
}

interface Props {
	show: boolean;
	setShow: any;
	mousePos: MousePos;
}
const ContextMenu: React.FC<Props> = ({
	show,
	setShow,
	mousePos,
	children,
}) => {
	return (
		<AnimatePresence>
			{show && (
				<div>
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1, transition: { duration: 0.1 } }}
						exit={{}}
						className={styles.context_wrapper}
						style={{ top: mousePos.y, left: mousePos.x + 10 }}
					>
						<div className={styles.context_menu}>
							<ul>{children}</ul>
						</div>
					</motion.div>
					<div
						className={styles.context_background}
						onClick={(e) => setShow(false)}
					></div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default ContextMenu;
