import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const Home: React.FC = () => {
	const [user] = useContext(GlobalContext);
	return (
		<div className="container p-4">
			<p className="text-justify lead">
				El poder del grupo lo rigen dos personas, de las cuales los dos tienen
				falta de personalidad y ven el valor de otras cosas sino solo lo suyo,
				falta de coherencia total, incluso en el momento de hacer la mierda
				papel de normas que hicieron, ya me dirás tu que chaval con dos dedos de
				frente hace una mierda de normas así y luego solo lo firman dos
				personas.
			</p>
			<button
				className="btn btn-primary"
				onClick={() => {
					console.log(user);
				}}
			>
				Click
			</button>
		</div>
	);
};

export default Home;
