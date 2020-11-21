import { gql } from "@apollo/client";

export const GET_USERS = gql`
	query {
		getAllUsers {
			id
			name
			username
			points {
				amount
			}
		}
	}
`;

export const GET_CURRENT_USER = gql`
	query {
		getCurrentUser {
			id
			name
			username
		}
	}
`;
