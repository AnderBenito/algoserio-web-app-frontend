import React from "react";
import { useHistory } from "react-router-dom";
import Register from "../../components/Register";
import { useRegisterUserMutation } from "../../generated/graphql";

const RegisterContainer: React.FC = () => {
	const [registerMutation, { loading }] = useRegisterUserMutation();
	const history = useHistory();
	const initialValues = {
		name: "",
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	};

	const onSubmit = async (values: any, { setSubmitting }: any) => {
		setSubmitting(true);
		console.log(values);
		try {
			await registerMutation({
				variables: {
					name: values.name,
					username: values.username,
					email: values.email,
					password: values.password,
				},
			});
		} catch (e) {
			console.log(e);
			return;
		} finally {
			setSubmitting(false);
		}

		console.log("Register successful");
		history.push("/auth/login");
	};

	const validate = (values: any) => {
		const errors: any = {};
		if (!values.name) {
			errors.name = "Requerido";
		}
		if (!values.email) {
			errors.email = "Requerido";
		}
		if (!values.username) {
			errors.username = "Requerido";
		}
		if (!values.password) {
			errors.password = "Requerido";
		}
		if (values.confirmPassword !== values.password) {
			errors.confirmPassword = "Tienen que ser iguales";
		}
		return errors;
	};
	return (
		<Register
			initialValues={initialValues}
			loading={loading}
			onSubmit={onSubmit}
			validate={validate}
		/>
	);
};

export default RegisterContainer;
