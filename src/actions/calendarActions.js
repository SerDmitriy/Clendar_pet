import { actionsCreator } from '../utils/index'

const statuses = ['REQUEST', 'SUCCESS', 'FAILED', 'CLEAR']
const actionTypes = ['CALENDAR']

export default actionsCreator(statuses, actionTypes)
