import React from "react";
import styles from "./index.module.css";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
	closeCallback?: (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
	) => any;
	submitCallback?: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => any;
	show: boolean;
	title?: string;
}
const ModalComponent: React.FC<Props> = (props) => {
	return (
		<AnimatePresence exitBeforeEnter={true}>
			{props.show && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { duration: 0.2 },
					}}
					exit={{ opacity: 0, transition: { duration: 0.1 } }}
					className={styles.custom_modal}
				>
					<motion.div
						className={styles.modal_window}
						initial={{ scale: 0.4 }}
						animate={{
							scale: 1,
							transition: {
								duration: 0.2,
								ease: "easeOut",
								mass: 0.1,
							},
						}}
						exit={{ scale: 0.2, transition: { duration: 0.3 } }}
					>
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">{props.title}</h5>
									<button
										type="button"
										className="close"
										onClick={props.closeCallback}
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">{props.children}</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										onClick={props.closeCallback}
									>
										Cerrar
									</button>
									<button
										type="button"
										className="btn btn-primary"
										onClick={props.submitCallback}
									>
										Aceptar
									</button>
								</div>
							</div>
						</div>
					</motion.div>
					<div
						className={styles.modal_background}
						onClick={props.closeCallback}
					></div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ModalComponent;
