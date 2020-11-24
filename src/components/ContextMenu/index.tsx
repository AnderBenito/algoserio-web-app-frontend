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
		<>
			{show ? (
				<>
					<div
						className={styles.context_wrapper}
						style={{ top: mousePos.y, left: mousePos.x + 10 }}
					>
						<div className={styles.context_menu}>
							<ul>{children}</ul>
						</div>
					</div>
					<div
						className={styles.context_background}
						onClick={(e) => setShow(false)}
					></div>
				</>
			) : null}
		</>
	);
};

export default ContextMenu;
