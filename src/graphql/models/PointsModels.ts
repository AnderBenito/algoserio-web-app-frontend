import { UserData } from "./UserModels";
export interface PointsData {
	createdAt?: string;
	amount?: number;
	reason?: string;
	user?: UserData;
}
