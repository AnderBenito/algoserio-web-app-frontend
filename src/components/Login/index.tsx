import { Alert, AlertIcon, Button, Container } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { MyTextInput } from "../FormComponents";

interface Props {
	loading: boolean;
	initialValues: any;
	onSubmit: any;
	error: any;
}

const Login: React.FC<Props> = ({
	loading,
	initialValues,
	onSubmit,
	error,
}) => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			<Container maxW="sm">
				<Form>
					<MyTextInput label="Nombre de usuario" name="username" type="text" />
					<MyTextInput label="Contraseña" name="password" type="password" />
					<Button
						marginTop={2}
						width="100%"
						type="submit"
						isLoading={loading}
						loadingText="Submitting"
					>
						Iniciar Sesión
					</Button>
					{error && (
						<Alert marginTop={2} status="error">
							<AlertIcon />
							Nombre de usuario o contraseña incorrectos
						</Alert>
					)}
				</Form>
			</Container>
		</Formik>
	);
};

export default Login;
