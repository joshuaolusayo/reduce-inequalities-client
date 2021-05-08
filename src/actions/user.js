export const getUser = () => async (dispatch) => {
	try {
		const response = await fetch("http://localhost:5000/", { method: "GET", headers: { token: localStorage.token } });
		const parseRes = await response.json();
		console.log(parseRes);
		return dispatch({
			type: "GET_USER",
			payload: response,
		});
	} catch (error) {
		console.error(error.message);
	}
};

export const setAuth = () => async (dispatch) => {
	return dispatch({
		type: "SET_AUTH",
		payload: true,
	});
};
