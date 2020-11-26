// import Admin from "../views/Admin";
// import Home from "../views/Home";
// import Login from "../views/Login";
// import Register from "../views/Register";
// import UserProfile from "../views/UserProfile";

import { lazy } from "react";

const Admin = lazy(() => import("../views/Admin"));
const Home = lazy(() => import("../views/Home"));
const Login = lazy(() => import("../views/Login"));
const Register = lazy(() => import("../views/Register"));
const UserProfile = lazy(() => import("../views/UserProfile"));

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
		component: UserProfile,
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
