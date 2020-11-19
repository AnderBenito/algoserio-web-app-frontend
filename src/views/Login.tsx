import React, { useState } from "react";
import loginForm from "../models/loginForm.model";

const Login: React.FC = () => {
	const [form, setForm] = useState<loginForm>({
		username: "",
		password: "",
	});
	const onFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(form);
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
				<button className="btn btn-primary w-100" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
