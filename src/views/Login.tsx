import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import LoadingButton from "../components/LoadingButton";
import { LOGIN_USER } from "../graphql/mutations/UserMutations";
import loginForm from "../models/loginForm.model";

const Login: React.FC<RouteComponentProps> = (props) => {
	const [form, setForm] = useState<loginForm>({
		username: "",
		password: "",
	});

	const [loginMutation, { loading, error }] = useMutation(LOGIN_USER);

	const onFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(form);
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
		}

		console.log("Logging Successful");
		clearForm();
		console.log(res);
		props.history.push("/");
	};

	const clearForm = () => {
		setForm({
			username: "",
			password: "",
		});
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
						onChange={onFormInput}
						value={form.username}
					/>
				</div>
				<div className="form-group">
					<label>Contrasena</label>
					<input
						className="form-control"
						name="password"
						type="password"
						onChange={onFormInput}
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
