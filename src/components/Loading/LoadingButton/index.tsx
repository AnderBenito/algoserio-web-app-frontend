import React from "react";

interface Props {
	className?: string;
	loading: boolean;
	text: string;
}
const LoadingButton: React.FC<Props> = (props) => {
	if (props.loading) {
		return (
			<button className={props.className} type="button" disabled>
				<span
					className="spinner-border spinner-border-sm"
					role="status"
					aria-hidden="true"
				></span>
				Cargando...
			</button>
		);
	} else {
		return (
			<button className={props.className} type="submit">
				{props.text}
			</button>
		);
	}
};

export default LoadingButton;
