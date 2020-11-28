import React from "react";
import { Form, Formik } from "formik";
import { RouteComponentProps } from "react-router-dom";
import LoadingButton from "../../components/Loading/LoadingButton";
import { useRegisterUserMutation } from "../../generated/graphql";
import { MyTextInput } from "../../components/FormComponents";

const Register: React.FC<RouteComponentProps> = (props) => {
	const [registerMutation, { loading }] = useRegisterUserMutation();

	const onSubmit = async (values: any, setSubmitting: any) => {
		setSubmitting(true);
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
		props.history.push("/auth/login");
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
		<div className="container p-5">
			<Formik
				initialValues={{
					name: "",
					email: "",
					username: "",
					password: "",
					confirmPassword: "",
				}}
				validate={validate}
				onSubmit={(values, { setSubmitting }) => {
					console.log(values);
					onSubmit(values, setSubmitting);
				}}
			>
				<Form>
					<div className="form-group">
						<MyTextInput
							className="form-control"
							label="Nombre"
							type="text"
							placeholder="Nombre"
							name="name"
						/>
					</div>
					<div className="form-group">
						<MyTextInput
							className="form-control"
							label="Email"
							type="text"
							placeholder="algo@pajero.com"
							name="email"
						/>
					</div>
					<div className="form-group">
						<MyTextInput
							className="form-control"
							label="Nombre de usuario"
							type="text"
							placeholder="Nombre de usuario"
							name="username"
						/>
					</div>
					<div className="form-group">
						<MyTextInput
							className="form-control"
							label="Contraseña"
							type="password"
							name="password"
						/>
					</div>
					<div className="form-group">
						<MyTextInput
							className="form-control"
							label="Confirmar contraseña"
							type="password"
							name="confirmPassword"
						/>
					</div>
					<LoadingButton
						className="btn btn-primary w-100"
						loading={loading}
						text="Registrarse"
					/>
				</Form>
			</Formik>
		</div>
	);
};

export default Register;
