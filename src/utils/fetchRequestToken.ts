const fetchRequestToken = async () => {
	const res = await fetch(
		`${process.env.REACT_APP_API_URL}/auth/refresh_token`,
		{
			method: "POST",
			credentials: "include",
		}
	);

	const data = await res.json();

	return data;
};

export default fetchRequestToken;
