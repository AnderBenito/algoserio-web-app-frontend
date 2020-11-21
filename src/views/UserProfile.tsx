import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { CHANGE_USER_PASSWORD } from "../graphql/mutations/UserMutations";
import { GET_CURRENT_USER } from "../graphql/queries/UserQueries";
import { useForm } from "../utils/useForm";

interface PasswordForm {
	oldPassword: string;
	newPassword: string;
}

const UserProfile: React.FC = () => {
	const [form, onFormChange, clearForm] = useForm<PasswordForm>({
		oldPassword: "",
		newPassword: "",
	});
	const [passwordConfirm, setPasswordConfirm] = useState<string>("");

	const { loading, error, data } = useQuery(GET_CURRENT_USER, {
		fetchPolicy: "network-only",
	});
	const [changePasswordMutation, changePasswordData] = useMutation(
		CHANGE_USER_PASSWORD
	);

	const changePassword = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (
			passwordConfirm !== form.newPassword ||
			!passwordConfirm ||
			!form.newPassword
		) {
			console.log("Dont match");
			return;
		}

		try {
			await changePasswordMutation({
				variables: {
					oldPassword: form.oldPassword,
					newPassword: form.newPassword,
				},
			});
		} catch (e) {
			console.log(e);
		} finally {
			clearForm();
		}
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
							value={form.oldPassword}
							onChange={onFormChange}
							className="form-control"
							type="password"
						></input>
					</div>
					<div className="form-group">
						<label>Nueva contraseña</label>
						<input
							name="newPassword"
							value={form.newPassword}
							onChange={onFormChange}
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
