import { actionsCreator } from '../utils'

const actionTypes = ['UPDATE_USER', 'FETCH_USERS', 'ADD_USER', 'REMOVE_USER']

export const { actions, types } = actionsCreator(actionTypes)
