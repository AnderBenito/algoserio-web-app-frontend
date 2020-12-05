import GalaStateData from "../../models/galaState.mode";
import State from "../../models/state.model";

const galaInitialState: State<GalaStateData> = {
	data: {
		id: "",
		name: "",
	},
	isLoading: true,
	error: false,
};

export default galaInitialState;
