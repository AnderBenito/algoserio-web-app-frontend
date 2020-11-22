import { useMutation } from "@apollo/client";
import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import LoadingButton from "../components/LoadingButton";
import { GlobalContext } from "../context/GlobalProvider";
import { LOGIN_USER } from "../graphql/mutations/UserMutations";
import LoginForm from "../models/loginForm.model";
import { setAccessToken } from "../utils/accessToken";
import { useForm } from "../utils/useForm";
import jwtDecode from "jwt-decode";

const Login: React.FC<RouteComponentProps> = (props) => {
	const { form, onFormChange, clearForm } = useForm<LoginForm>({
		username: "",
		password: "",
	});

	const { setUser } = useContext(GlobalContext);

	const [loginMutation, { loading, error }] = useMutation(LOGIN_USER);

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		let res = null;
		try {
			res = await loginMutation({
				variables: {
					username: form.username,
					password: form.password,
				},
			});
			console.log("Logging Successful");
			const token = res.data.loginUser.accessToken;
			setAccessToken(token);
			const { isAdmin } = jwtDecode(token) as any;
			setUser({
				loggedIn: true,
				isAdmin,
			});

			props.history.push("/");
		} catch (e) {
			console.log(e);
			return;
		} finally {
			clearForm();
		}
	};

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
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>Usuario</label>
					<input
						className="form-control"
						name="username"
						type="text"
						onChange={onFormChange}
						value={form.username}
					/>
				</div>
				<div className="form-group">
					<label>Contrasena</label>
					<input
						className="form-control"
						name="password"
						type="password"
						onChange={onFormChange}
						value={form.password}
					/>
				</div>
				<LoadingButton
					className="btn btn-primary w-100"
					loading={loading}
					text="Iniciar Sesion"
				/>
				{renderError("Usuario o contraseña no válidos")}
			</form>
		</div>
	);
};

export default Login;
