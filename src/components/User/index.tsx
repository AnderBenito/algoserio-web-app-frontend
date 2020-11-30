import { Button, Container } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { MyTextInput } from "../FormComponents";

interface Props {
	initialValues: any;
	validate: any;
	user: any;
	handleSubmit: any;
	response: any;
}

const User: React.FC<Props> = (props) => {
	return (
		<Container>
			<div>
				<h1>{props.user.name}</h1>
				<h5>Nombre de usuario: {props.user.username}</h5>
			</div>

			<Formik
				initialValues={props.initialValues}
				validate={props.validate}
				onSubmit={props.handleSubmit}
			>
				<Form>
					<MyTextInput
						label="Antigua contraseña"
						type="password"
						name="oldPassword"
					/>

					<MyTextInput
						label="Nueva contraseña"
						type="password"
						name="newPassword"
					/>

					<MyTextInput
						label="Confirmar contraseña"
						type="password"
						name="confirmNewPassword"
					/>

					<Button
						marginTop={2}
						width="100%"
						type="submit"
						loadingText="Submitting"
					>
						Cambiar
					</Button>

					{props.response.data && <div>Contraseña cambiada</div>}
					{props.response.error && (
						<div>La contraseña antigua no es valida</div>
					)}
				</Form>
			</Formik>
		</Container>
	);
};

export default User;
