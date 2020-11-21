import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { CHANGE_USER_PASSWORD } from "../graphql/mutations/UserMutations";
import { GET_CURRENT_USER } from "../graphql/queries/UserQueries";

interface PasswordForm {
	oldPassword: string;
	newPassword: string;
}

const UserProfile: React.FC = () => {
	const [passwordForm, setPasswordForm] = useState<PasswordForm>({
		oldPassword: "",
		newPassword: "",
	});
	const [passwordConfirm, setPasswordConfirm] = useState<string>("");
	const { loading, error, data } = useQuery(GET_CURRENT_USER);
	const [changePasswordMutation, changePasswordData] = useMutation(
		CHANGE_USER_PASSWORD
	);

	const onFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPasswordForm({
			...passwordForm,
			[event.target.name]: event.target.value,
		});
	};

	const clearForm = () => {
		setPasswordForm({
			oldPassword: "",
			newPassword: "",
		});
		setPasswordConfirm("");
	};

	const changePassword = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (
			passwordConfirm !== passwordForm.newPassword ||
			!passwordConfirm ||
			!passwordForm.newPassword
		) {
			console.log("Dont match");
			return;
		}

		try {
			await changePasswordMutation({
				variables: {
					oldPassword: passwordForm.oldPassword,
					newPassword: passwordForm.newPassword,
				},
			});
		} catch (e) {
			console.log(e);
		}
		clearForm();
	};

	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error</div>;
	}

	return (
		<div className="container p-5">
			<div>
				<h1>{data.getCurrentUser.name}</h1>
				<h5>Nombre de usuario: {data.getCurrentUser.username}</h5>
			</div>
			<div>
				<form onSubmit={changePassword}>
					<div className="form-group">
						<label>Antigua contraseña</label>
						<input
							name="oldPassword"
							value={passwordForm.oldPassword}
							onChange={onFormInput}
							className="form-control"
							type="password"
						></input>
					</div>
					<div className="form-group">
						<label>Nueva contraseña</label>
						<input
							name="newPassword"
							value={passwordForm.newPassword}
							onChange={onFormInput}
							className="form-control"
							type="password"
						></input>
					</div>
					<div className="form-group">
						<label>Confirmar nueva contraseña</label>
						<input
							value={passwordConfirm}
							onChange={(e) => setPasswordConfirm(e.target.value)}
							className="form-control"
							type="password"
						></input>
					</div>
					<div className="form-group">
						<button className="btn btn-primary">Cambiar</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserProfile;
