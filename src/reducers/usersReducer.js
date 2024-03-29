import initialState from '../store/initialState'

export default (state = initialState.user, action) => {
	switch (action.type) {
		case 'UPDATE_USER_SUCCESS':
			return {
				...state,
				...action.payload,
			}
		case 'FETCH_USERS_REQUEST':
			return {
				...state,
				loading: true,
			}
		case 'FETCH_USERS_SUCCESS':
			return {
				...state,
				currentUser: action.payload,
				loading: false,
				success: true,
				errors: null,
			}
		case 'FETCH_USERS_FAILED':
			return {
				...state,
				loading: false,
				success: false,
				errors: action.payload,
			}
		case 'FETCH_USERS_CLEAR':
			return {
				...state,
				currentUser: {},
				loading: false,
				success: false,
				errors: null,
			}
		case 'ADD_USER_REQUEST':
			return {
				...state,
				loading: true,
			}
		case 'ADD_USER_SUCCESS':
			return {
				...state,
				currentUser: action.payload,
				loading: false,
				success: true,
				errors: null,
			}
		case 'ADD_USER_FAILED':
			return {
				...state,
				loading: false,
				success: false,
				errors: action.payload,
			}
		case 'ADD_USER_CLEAR':
			return {
				...state,
				currentUser: {},
				loading: false,
				success: false,
				errors: null,
			}
		case 'REMOVE_USER_REQUEST':
			return {
				...state,
				loading: true,
			}
		case 'REMOVE_USER_SUCCESS':
			return {
				...state,
				currentUser: action.payload,
				users: [...state.users].filter(item => item.id !== action.payload.id),
				loading: false,
				success: true,
				errors: null,
			}
		case 'REMOVE_USER_FAILED':
			return {
				...state,
				loading: false,
				success: false,
				errors: action.payload,
			}
		case 'REMOVE_USER_CLEAR':
			return {
				...initialState,
			}
		default:
			return state
	}
}
