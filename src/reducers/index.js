import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import calendarReducer from './calendarReducer'

const createRootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		calendarReducer,
	})

export default createRootReducer
