import { PointsData } from "./PointsModels";
export interface UserData {
	id?: string;
	name?: string;
	username?: string;
	email?: string;
	points?: PointsData[];
}

export interface UserDataTotalPoints {
	user: UserData;
	totalPoints: number;
}
