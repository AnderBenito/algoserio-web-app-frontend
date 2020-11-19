import React, { useState } from "react";
import registerForm from "../models/registerForm.model";
import { useQuery, gql } from "@apollo/client";
interface Props {}

const Register: React.FC<Props> = () => {
	const data = useQuery(gql`
		query {
			getAllUsers {
				id
				name
				username
				points {
					reason
					amount
				}
			}
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

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(form, data);
		if (form.password !== confirmationPassword) console.log("Dont match");
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
