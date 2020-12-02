import AdminView from "../views/AdminView";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import UserView from "../views/UserView";

export const routes = [
	{
		path: "/",
		exact: true,
		component: HomeView,
		title: "Home",
		needsAuth: false,
	},
	{
		path: "/auth/register",
		exact: true,
		component: RegisterView,
		title: "Register",
		needsAuth: false,
	},
	{
		path: "/auth/login",
		exact: true,
		component: LoginView,
		title: "Login",
		needsAuth: false,
	},
	{
		path: "/user",
		exact: true,
		component: UserView,
		title: "User Profile",
		needsAuth: false,
	},
	{
		path: "/admin",
		exact: false,
		component: AdminView,
		title: "Admin",
		needsAuth: true,
	},
];
