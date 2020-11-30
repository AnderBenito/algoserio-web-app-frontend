import Admin from "../views/Admin";
import Home from "../views/HomeView";
import Login from "../views/LoginView";
import Register from "../views/RegisterView";
import UserView from "../views/UserView";

export const routes = [
	{
		path: "/",
		exact: true,
		component: Home,
		title: "Home",
		needsAuth: false,
	},
	{
		path: "/auth/register",
		exact: true,
		component: Register,
		title: "Register",
		needsAuth: false,
	},
	{
		path: "/auth/login",
		exact: true,
		component: Login,
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
		component: Admin,
		title: "Admin",
		needsAuth: true,
	},
];
