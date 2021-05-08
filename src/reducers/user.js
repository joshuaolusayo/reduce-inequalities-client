const initialState = {
	userDetail: [],
	auth: false,
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_USER":
			return {
				...state,
				userDetail: action.payload,
			};
		case "SET_AUTH":
			return {
				...state,
				auth: action.payload,
			};
		default:
			return state;
	}
}
