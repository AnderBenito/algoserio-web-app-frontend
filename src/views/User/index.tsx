import React from "react";
import { RouteComponentProps } from "react-router-dom";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import {
	useChangeUserPasswordMutation,
	useGetCurrentUserQuery,
} from "../../generated/graphql";
import { Formik, Form } from "formik";
import { MyTextInput } from "../../components/FormComponents";

const validate = (values: any) => {
	const errors: any = {};
	if (!values.newPassword) {
		errors.newPassword = "Requerido";
	}
	if (values.confirmNewPassword !== values.newPassword) {
		errors.confirmNewPassword = "No coinciden";
	}

	return errors;
};

const UserProfile: React.FC<RouteComponentProps> = (props) => {
	const { loading, error, data } = useGetCurrentUserQuery({
		fetchPolicy: "network-only",
	});
	const [
		changePasswordMutation,
		{ data: response, error: responseError },
	] = useChangeUserPasswordMutation();

	if (loading) return <LoadingSpinner />;
	else if (error) {
		props.history.push("/auth/login");
		return null;
	} else if (data) {
		return (
			<div className="container mt-2 mb-2 pt-2">
				<div>
					<h1>{data.getCurrentUser.name}</h1>
					<h5>Nombre de usuario: {data.getCurrentUser.username}</h5>
				</div>
				<div>
					<Formik
						initialValues={{
							oldPassword: "",
							newPassword: "",
							confirmNewPassword: "",
						}}
						validate={validate}
						onSubmit={async (values, { setSubmitting, resetForm }) => {
							setSubmitting(true);
							try {
								await changePasswordMutation({
									variables: {
										oldPassword: values.oldPassword,
										newPassword: values.newPassword,
									},
								});
							} catch (e) {
								console.log(e);
							} finally {
								setSubmitting(false);
								resetForm();
							}
						}}
					>
						<Form>
							<div className="form-group">
								<MyTextInput
									className="form-control"
									label="Antigua contraseña"
									type="password"
									name="oldPassword"
								/>
							</div>
							<div className="form-group">
								<MyTextInput
									className="form-control"
									label="Nueva contraseña"
									type="password"
									name="newPassword"
								/>
							</div>
							<div className="form-group">
								<MyTextInput
									className="form-control"
									label="Confirmar contraseña"
									type="password"
									name="confirmNewPassword"
								/>
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary">
									Cambiar
								</button>
							</div>
							{response?.changeUserPassword && (
								<div className="alert alert-success" role="alert">
									Contraseña cambiada
								</div>
							)}
							{responseError && (
								<div className="alert alert-danger" role="alert">
									La contraseña antigua no es valida
								</div>
							)}
						</Form>
					</Formik>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default UserProfile;
