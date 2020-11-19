import React, { useState } from "react";
import registerForm from "../models/registerForm.model";
import { useMutation, gql } from "@apollo/client";
import { RouteComponentProps } from "react-router-dom";

const Register: React.FC<RouteComponentProps> = (props) => {
	const [registerMutation, { loading }] = useMutation(gql`
		mutation RegisterUser(
			$name: String!
			$email: String!
			$username: String!
			$password: String!
		) {
			registerUser(
				name: $name
				email: $email
				username: $username
				password: $password
			)
		}
	`);
	const [form, setForm] = useState<registerForm>({
		name: "",
		email: "",
		username: "",
		password: "",
	});
	const [confirmationPassword, setConfirmationPassword] = useState<string>("");

	const onFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(isFormValid());
		if (form.password !== confirmationPassword || !isFormValid()) {
			console.log("Dont match");
			return;
		}

		try {
			await registerMutation({
				variables: {
					name: form.name,
					username: form.username,
					email: form.email,
					password: form.password,
				},
			});
		} catch (e) {
			console.log(e);
			return;
		}

		console.log("Register successful");
		props.history.push("/auth/login");
		clearForm();
	};

	const clearForm = () => {
		setForm({
			name: "",
			username: "",
			password: "",
			email: "",
		});
	};

	const isFormValid = () => {
		return (
			form.email !== "" &&
			form.username !== "" &&
			form.name !== "" &&
			form.password !== ""
		);
	};

	return (
		<div className="container p-4">
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>Nombre</label>
					<input
						className="form-control"
						name="name"
						type="text"
						onChange={onFormInput}
						value={form.name}
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						className="form-control"
						name="email"
						type="text"
						onChange={onFormInput}
						value={form.email}
					/>
				</div>
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
				<div className="form-group">
					<label>Confirmar contrasena</label>
					<input
						className="form-control"
						name="confirm_password"
						type="password"
						onChange={(e) => {
							setConfirmationPassword(e.target.value);
						}}
						value={confirmationPassword}
					/>
				</div>
				<button className="btn btn-primary w-100" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};

export default Register;
