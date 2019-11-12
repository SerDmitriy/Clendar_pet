const initialState = {
	errors: null,
	loading: false,
	success: false,
	isAuthenticated: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'CALEND_REQUEST':
			return {
				...state,
				loading: true,
			}
		case 'CALEND_SUCCESS':
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				success: true,
				errors: null,
			}
		case 'CALEND_FAILED':
			return {
				...state,
				loading: false,
				success: false,
				errors: action.payload,
			}
		case 'CALEND_CLEAR':
			return {
				...initialState,
			}

		default:
			return state
	}
}
