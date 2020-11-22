const fetchRequestToken = async () => {
	const res = await fetch("http://localhost:5000/auth/refresh_token", {
		method: "POST",
		credentials: "include",
	});

	const data = await res.json();

	return data;
};

export default fetchRequestToken;
