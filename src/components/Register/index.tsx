import { Button, Container } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { MyTextInput } from "../FormComponents";

interface Props {
	initialValues: any;
	validate: any;
	onSubmit: any;
	loading: boolean;
}

const Register: React.FC<Props> = ({
	initialValues,
	loading,
	onSubmit,
	validate,
}) => {
	return (
		<Container maxW="sm">
			<Formik
				initialValues={initialValues}
				validate={validate}
				onSubmit={onSubmit}
			>
				<Form>
					<MyTextInput
						label="Nombre"
						type="text"
						placeholder="Nombre"
						name="name"
					/>

					<MyTextInput
						label="Email"
						type="text"
						placeholder="algo@pajero.com"
						name="email"
					/>

					<MyTextInput
						label="Nombre de usuario"
						type="text"
						placeholder="Nombre de usuario"
						name="username"
					/>

					<MyTextInput label="Contraseña" type="password" name="password" />

					<MyTextInput
						label="Confirmar contraseña"
						type="password"
						name="confirmPassword"
					/>

					<Button
						marginTop={2}
						width="100%"
						type="submit"
						isLoading={loading}
						loadingText="Submitting"
					>
						Registrate
					</Button>
				</Form>
			</Formik>
		</Container>
	);
};

export default Register;
