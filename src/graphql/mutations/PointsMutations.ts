import { gql } from "@apollo/client";

export interface AddPointsToUserMutationVars {
	username: string;
	reason: string;
	amount: number;
}

export interface AddPointsToUserMutation {
	addPoints: boolean;
}

export const ADD_POINTS_TO_USERNAME = gql`
	mutation AddPoints($username: String!, $reason: String!, $amount: Float!) {
		addPoints(username: $username, reason: $reason, amount: $amount)
	}
`;
