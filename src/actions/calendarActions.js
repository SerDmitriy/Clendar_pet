import { actionsCreator } from '../utils/index'

const actionTypes = ['ADD_CALENDAR', 'FETCH_CALENDAR', 'UPDATE_CALENDAR', 'REMOVE_CALENDAR']

export const { actions, types } = actionsCreator(actionTypes)
