import Action from "../../models/action.model";
import State from "../../models/state.model";
import UserStateData from "../../models/userState.model";

export default function userReducer(
	state: State<UserStateData>,
	action: Action
): State<UserStateData> {
	switch (action.type) {
		case "login_in":
			return {
				...state,
				isLoading: true,
			};
		case "login_success":
			return {
				...state,
				data: {
					loggedIn: true,
					isAdmin: action.payload.isAdmin,
				},
				isLoading: false,
			};
		case "login_error":
			return {
				...state,
				data: {
					loggedIn: false,
					isAdmin: false,
				},
				isLoading: false,
				error: true,
			};
		case "logout":
			return {
				...state,
				data: {
					loggedIn: false,
					isAdmin: false,
				},
				isLoading: false,
			};
		default:
			return state;
	}
}
