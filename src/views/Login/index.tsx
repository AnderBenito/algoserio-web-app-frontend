import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import LoadingButton from "../../components/Loading/LoadingButton";
import { GlobalContext } from "../../context/GlobalProvider";
import { setAccessToken } from "../../utils/accessToken";
import jwtDecode from "jwt-decode";
import { useUserLoginMutation } from "../../generated/graphql";
import { MyTextInput } from "../../components/FormComponents";
import { Formik, Form } from "formik";

const Login: React.FC<RouteComponentProps> = (props) => {
	const { userDispatch } = useContext(GlobalContext);
	const [loginMutation, { loading, error }] = useUserLoginMutation();

	const renderError = (errorMessage: string) => {
		if (error) {
			return (
				<div className="alert alert-danger" role="alert">
					{errorMessage}
				</div>
			);
		}
	};

	return (
		<div className="container p-5">
			<Formik
				initialValues={{
					username: "",
					password: "",
				}}
				onSubmit={async (values, { resetForm }) => {
					let res = null;
					try {
						res = await loginMutation({
							variables: {
								username: values.username,
								password: values.password,
							},
						});
						const token = res.data!.loginUser.accessToken;
						setAccessToken(token);
						const { isAdmin } = jwtDecode(token) as any;
						userDispatch({ type: "login_success", payload: { isAdmin } });

						props.history.push("/");
					} catch (e) {
						return;
					} finally {
						resetForm();
					}
				}}
			>
				<Form>
					<div className="form-group">
						<MyTextInput
							className="form-control"
							label="Nombre de usuario"
							name="username"
							type="text"
						/>
					</div>
					<div className="form-group">
						<MyTextInput
							className="form-control"
							label="Contraseña"
							name="password"
							type="password"
						/>
					</div>
					<div className="form-group">
						<LoadingButton
							className="btn btn-primary w-100"
							loading={loading}
							text="Iniciar Sesion"
						/>
					</div>
					{renderError("Usuario o contraseña no válidos")}
				</Form>
			</Formik>
		</div>
	);
};

export default Login;
