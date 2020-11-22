import { PointsData } from "./../models/PointsModels";
import { gql } from "@apollo/client";

export interface GetPointsQuery {
	getAllPoints: PointsData[];
}

export const GET_ALL_POINTS = gql`
	query {
		getAllPoints {
			createdAt
			amount
			reason
			user {
				name
			}
		}
	}
`;
