import React from "react";

interface Props {
	onItemClick?: (e: any) => any;
}
const MenuItem: React.FC<Props> = ({ children, onItemClick }) => {
	return <li onClick={onItemClick}>{children}</li>;
};

export default MenuItem;
