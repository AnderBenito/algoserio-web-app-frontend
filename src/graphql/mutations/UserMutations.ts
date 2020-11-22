import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
	mutation RegisterUser(
		$name: String!
		$email: String!
		$username: String!
		$password: String!
	) {
		registerUser(
			name: $name
			email: $email
			username: $username
			password: $password
		)
	}
`;

export const LOGIN_USER = gql`
	mutation UserLogin($username: String!, $password: String!) {
		loginUser(username: $username, password: $password) {
			accessToken
		}
	}
`;

export const LOGOUT_USER = gql`
	mutation UserLogout {
		logOutUser
	}
`;

export const CHANGE_USER_PASSWORD = gql`
	mutation ChangeUserPassword($oldPassword: String!, $newPassword: String!) {
		changeUserPassword(oldPassword: $oldPassword, newPassword: $newPassword)
	}
`;
