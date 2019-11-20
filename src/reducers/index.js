import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import calendarReducer from './calendarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

const createRootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		calendarReducer,
		usersReducer,
		authReducer,
	})

export default createRootReducer
