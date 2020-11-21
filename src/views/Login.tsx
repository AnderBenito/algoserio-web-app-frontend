import { useMutation } from "@apollo/client";
import React, { useContext, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import LoadingButton from "../components/LoadingButton";
import { GlobalContext } from "../context/GlobalProvider";
import { LOGIN_USER } from "../graphql/mutations/UserMutations";
import LoginForm from "../models/loginForm.model";
import { setAccessToken } from "../utils/accessToken";
import { useForm } from "../utils/useForm";

const Login: React.FC<RouteComponentProps> = (props) => {
	// const [form, setForm] = useState<LoginForm>({
	// 	username: "",
	// 	password: "",
	// });
	const [form, onFormChange, clearForm] = useForm<LoginForm>({
		username: "",
		password: "",
	});

	const [_, setUser] = useContext(GlobalContext);

	const [loginMutation, { loading, error }] = useMutation(LOGIN_USER);

	// const onFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setForm({
	// 		...form,
	// 		[event.target.name]: event.target.value,
	// 	});
	// };

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
		} catch (e) {
			console.log(e);
			return;
		} finally {
			clearForm();
		}

		console.log("Logging Successful");

		//Save to local state
		setUser({
			loggedIn: true,
		});
		//Save to local storage
		//localStorage.setItem("accessToken", res.data.loginUser.accessToken);
		setAccessToken(res.data.loginUser.accessToken);

		//Push to login
		props.history.push("/");
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
