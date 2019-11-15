import { actionsCreator } from '../utils/index'

const statuses = ['REQUEST', 'SUCCESS', 'FAILED', 'CLEAR']
const actionTypes = ['LANG', 'FETCH_USERS', 'ADD_USER', 'REMOVE_USER']

export default actionsCreator(statuses, actionTypes)
