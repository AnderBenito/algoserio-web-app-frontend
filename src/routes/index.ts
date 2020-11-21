import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import UserProfile from "../views/UserProfile";

export const routes = [
	{
		path: "/",
		component: Home,
		title: "Home",
		needsAuth: false,
	},
	{
		path: "/auth/register",
		component: Register,
		title: "Register",
		needsAuth: false,
	},
	{
		path: "/auth/login",
		component: Login,
		title: "Login",
		needsAuth: false,
	},
	{
		path: "/user",
		component: UserProfile,
		title: "User Profile",
		needsAuth: false,
	},
];
