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
		<div>
			<form onSubmit={onSubmit}>
				<div>
					<label>Usuario</label>
					<input
						name="username"
						type="text"
						onChange={onFormInput}
						value={form.username}
					/>
				</div>
				<div>
					<label>Contrasena</label>
					<input
						name="password"
						type="password"
						onChange={onFormInput}
						value={form.password}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
