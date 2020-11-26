import React, { useState } from "react";
import RegisterForm from "../../models/registerForm.model";
import { RouteComponentProps } from "react-router-dom";
import LoadingButton from "../../components/Loading/LoadingButton";
import { useForm } from "../../utils/useForm";
import { useRegisterUserMutation } from "../../generated/graphql";

const Register: React.FC<RouteComponentProps> = (props) => {
	const [registerMutation, { loading }] = useRegisterUserMutation();
	const { form, onFormChange, clearForm } = useForm<RegisterForm>({
		name: "",
		email: "",
		username: "",
		password: "",
	});

	const [confirmationPassword, setConfirmationPassword] = useState<string>("");

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
		} finally {
			clearForm();
		}

		console.log("Register successful");
		props.history.push("/auth/login");
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
		<div className="container p-5">
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>Nombre</label>
					<input
						className="form-control"
						name="name"
						type="text"
						onChange={onFormChange}
						value={form.name}
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						className="form-control"
						name="email"
						type="text"
						onChange={onFormChange}
						value={form.email}
					/>
				</div>
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
				<LoadingButton
					className="btn btn-primary w-100"
					loading={loading}
					text="Registrarse"
				/>
			</form>
		</div>
	);
};

export default Register;
