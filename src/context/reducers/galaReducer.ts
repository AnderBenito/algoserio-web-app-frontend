import Action from "../../models/action.model";
import GalaStateData from "../../models/galaState.mode";
import State from "../../models/state.model";

export default function galaReducer(
	state: State<GalaStateData>,
	{ type, payload }: Action
): State<GalaStateData> {
	switch (type) {
		case "fetching_gala":
			return {
				...state,
				isLoading: true,
			};

		case "set_gala":
			return {
				...state,
				data: {
					id: payload.id,
					name: payload.name,
				},
				isLoading: false,
			};
		default:
			return state;
	}
}
