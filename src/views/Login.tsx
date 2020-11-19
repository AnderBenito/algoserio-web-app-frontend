import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import loginForm from "../models/loginForm.model";

const Login: React.FC<RouteComponentProps> = (props) => {
	const [form, setForm] = useState<loginForm>({
		username: "",
		password: "",
	});

	const [loginMutation, { loading, error }] = useMutation(gql`
		mutation UserLogin($username: String!, $password: String!) {
			loginUser(username: $username, password: $password) {
				accessToken
			}
		}
	`);

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

	const renderButton = () => {
		if (loading) {
			return (
				<button className="btn btn-primary w-100" type="button" disabled>
					<span
						className="spinner-border spinner-border-sm"
						role="status"
						aria-hidden="true"
					></span>
					Loading...
				</button>
			);
		} else {
			return (
				<button className="btn btn-primary w-100" type="submit">
					Login
				</button>
			);
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
		<div className="container p-4 mw-25">
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
				{renderButton()}
				{renderError("Usuario o contraseña no válidos")}
			</form>
		</div>
	);
};

export default Login;
