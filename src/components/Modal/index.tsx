import React from "react";
import "./index.css";

interface Props {
	closeCallback: (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
	) => any;
	submitCallback: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => any;
}
const ModalComponent: React.FC<Props> = (props) => {
	return (
		<div className="custom-modal">
			<div className="modal-window">
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
			<div className="modal-background" onClick={props.closeCallback}></div>
		</div>
	);
};

export default ModalComponent;
