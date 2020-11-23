import React from "react";
import styles from "./index.module.css";

interface Props {
	closeCallback: (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
	) => any;
	submitCallback: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => any;
	show: boolean;
}
const ModalComponent: React.FC<Props> = (props) => {
	if (props.show) {
		return (
			<div className={styles.custom_modal}>
				<div className={styles.modal_window}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Añade puntos</h5>
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
				</div>
				<div
					className={styles.modal_background}
					onClick={props.closeCallback}
				></div>
			</div>
		);
	} else {
		return null;
	}
};

export default ModalComponent;
