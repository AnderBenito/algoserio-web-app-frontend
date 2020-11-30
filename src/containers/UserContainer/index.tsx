import React from "react";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import User from "../../components/User";
import {
	useChangeUserPasswordMutation,
	useGetCurrentUserQuery,
} from "../../generated/graphql";

const validate = (values: any) => {
	const errors: any = {};
	if (!values.newPassword) {
		errors.newPassword = "Requerido";
	}
	if (values.confirmNewPassword !== values.newPassword) {
		errors.confirmNewPassword = "No coinciden";
	}

	return errors;
};

const initialValues = {
	oldPassword: "",
	newPassword: "",
	confirmNewPassword: "",
};

const UserContainer: React.FC = () => {
	const history = useHistory();
	const { loading, error, data } = useGetCurrentUserQuery({
		fetchPolicy: "network-only",
	});
	const [
		changePasswordMutation,
		{ data: response, error: responseError },
	] = useChangeUserPasswordMutation();

	const handleSubmit = async (
		values: any,
		{ setSubmitting, resetForm }: any
	) => {
		setSubmitting(true);
		try {
			await changePasswordMutation({
				variables: {
					oldPassword: values.oldPassword,
					newPassword: values.newPassword,
				},
			});
		} catch (e) {
			console.log(e);
		} finally {
			setSubmitting(false);
			resetForm();
		}
	};

	if (loading) return <LoadingSpinner />;
	else if (error) {
		history.push("/auth/login");
		return null;
	} else if (data) {
		return (
			<User
				handleSubmit={handleSubmit}
				initialValues={initialValues}
				response={{ data: response, error: responseError }}
				user={data.getCurrentUser}
				validate={validate}
			/>
		);
	} else {
		return null;
	}
};

export default UserContainer;
