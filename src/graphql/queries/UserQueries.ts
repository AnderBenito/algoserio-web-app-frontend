import { gql } from "@apollo/client";

export const GET_USERS = gql`
	query GetAllUsers() {
		getAllUsers(){
            id
            name
            username
            points {
                amount
            }
        }
	}
`;
