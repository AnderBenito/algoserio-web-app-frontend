import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { RouteComponentProps } from "react-router-dom";
import LoadingButton from "../../components/Loading/LoadingButton";
import { useRegisterUserMutation } from "../../generated/graphql";
import styles from "./index.module.css";

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
			errors.name = "Required";
		}
		if (!values.email) {
			errors.email = "Required";
		}
		if (!values.username) {
			errors.username = "Required";
		}
		if (!values.password) {
			errors.password = "Required";
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
						<label>Nombre</label>
						<Field className="form-control" name="name" type="text" />
						<div className={styles.error}>
							<ErrorMessage name="name" />
						</div>
					</div>
					<div className="form-group">
						<label>Email</label>
						<Field className="form-control" name="email" type="text" />
						<div className={styles.error}>
							<ErrorMessage name="email" />
						</div>
					</div>
					<div className="form-group">
						<label>Usuario</label>
						<Field className="form-control" name="username" type="text" />
						<div className={styles.error}>
							<ErrorMessage name="username" />
						</div>
					</div>
					<div className="form-group">
						<label>Contrasena</label>
						<Field className="form-control" name="password" type="password" />
						<div className={styles.error}>
							<ErrorMessage name="password" />
						</div>
					</div>
					<div className="form-group">
						<label>Confirmar contrasena</label>
						<Field
							className="form-control"
							name="confirmPassword"
							type="password"
						/>
						<div className={styles.error}>
							<ErrorMessage name="confirmPassword" />
						</div>
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
