import { actionsCreator } from '../utils/index'

const statuses = ['REQUEST', 'SUCCESS', 'FAILED', 'CLEAR']
const actionTypes = ['AUTH']

export default actionsCreator(statuses, actionTypes)
