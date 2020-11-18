import React, { useState } from "react";
import registerForm from "../models/registerForm.model";
interface Props {}

const Register: React.FC<Props> = () => {
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
		console.log(form);
		if (form.password !== confirmationPassword) console.log("Dont match");
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="card">
					<label>Nombre</label>
					<input
						name="name"
						type="text"
						onChange={onFormInput}
						value={form.name}
					/>
				</div>
				<div className="card">
					<label>Email</label>
					<input
						name="email"
						type="text"
						onChange={onFormInput}
						value={form.email}
					/>
				</div>
				<div className="card">
					<label>Usuario</label>
					<input
						name="username"
						type="text"
						onChange={onFormInput}
						value={form.username}
					/>
				</div>
				<div className="card">
					<label>Contrasena</label>
					<input
						name="password"
						type="password"
						onChange={onFormInput}
						value={form.password}
					/>
				</div>
				<div className="card">
					<label>Confirmar contrasena</label>
					<input
						name="confirm_password"
						type="password"
						onChange={(e) => {
							setConfirmationPassword(e.target.value);
						}}
						value={confirmationPassword}
					/>
				</div>
				<button className="btn btn-primary" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};

export default Register;
