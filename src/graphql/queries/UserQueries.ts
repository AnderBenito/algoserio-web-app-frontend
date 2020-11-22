import { UserData, UserDataTotalPoints } from "./../models/UserModels";
import { gql } from "@apollo/client";

export interface GetUsersQuery {
	getAllUsers: UserData[];
}

export interface GetCurrentUserQuery {
	getCurrentUser: UserData;
}

export interface GetTotalPointsPerUSer {
	getTotalPointsPerUSer: UserDataTotalPoints[];
}

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

export const GET_ALL_USER_INFO = gql`
	query {
		getAllUsers {
			id
			name
			username
			points {
				reason
				amount
			}
		}
	}
`;

export const GET_TOTAL_POINTS_PER_USER = gql`
	query GetTotalPointsPerUSer {
		getTotalPointsPerUSer {
			user {
				name
			}
			totalPoints
		}
	}
`;
