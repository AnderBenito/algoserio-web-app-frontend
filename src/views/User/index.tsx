import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import {
	useChangeUserPasswordMutation,
	useGetCurrentUserQuery,
} from "../../generated/graphql";
import { useForm } from "../../utils/useForm";

interface PasswordForm {
	oldPassword: string;
	newPassword: string;
	confirmNewPassword: string;
}

const UserProfile: React.FC<RouteComponentProps> = (props) => {
	const { form, onFormChange, clearForm } = useForm<PasswordForm>({
		oldPassword: "",
		newPassword: "",
		confirmNewPassword: "",
	});

	const { loading, error, data } = useGetCurrentUserQuery({
		fetchPolicy: "network-only",
	});
	const [changePasswordMutation] = useChangeUserPasswordMutation();

	useEffect(() => {
		console.log("User mounted");
	}, []);

	const changePassword = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (
			form.confirmNewPassword !== form.newPassword ||
			!form.confirmNewPassword ||
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
		console.log("Loading");
		return <LoadingSpinner />;
	} else if (error) {
		props.history.push("/auth/login");
		return null;
	} else if (data) {
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
								name="confirmNewPassword"
								value={form.confirmNewPassword}
								onChange={onFormChange}
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
	} else {
		return null;
	}
};

export default UserProfile;
