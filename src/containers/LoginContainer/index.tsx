import jwtDecode from "jwt-decode";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Login from "../../components/Login";
import { GlobalContext } from "../../context/GlobalProvider";
import { useUserLoginMutation } from "../../generated/graphql";
import { setAccessToken } from "../../utils/accessToken";

const LoginContainer: React.FC = () => {
	const { userDispatch } = useContext(GlobalContext);
	const [loginMutation, { loading, error }] = useUserLoginMutation();

	const history = useHistory();

	const onSubmit = async (values: any, { resetForm }: any) => {
		let res = null;
		try {
			res = await loginMutation({
				variables: {
					username: values.username,
					password: values.password,
				},
			});
			const token = res.data!.loginUser.accessToken;
			setAccessToken(token);
			const { isAdmin } = jwtDecode(token) as any;
			userDispatch({ type: "login_success", payload: { isAdmin } });

			history.push("/");
		} catch (e) {
			console.log(e);
			return;
		} finally {
			resetForm();
		}
	};

	const initialValues = {
		username: "",
		password: "",
	};

	return (
		<Login
			loading={loading}
			initialValues={initialValues}
			onSubmit={onSubmit}
			error={error}
		/>
	);
};

export default LoginContainer;
