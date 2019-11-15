import { call, put, takeLatest } from 'redux-saga/effects'
import { actions, types } from '../actions/usersActions'
import { Api } from '../entries/ApiTransport'

const api = Api.getInstance()

console.log(actions, types)

function* fetchUsers({ payload, callback }) {
	console.log('979actions ', actions)
	try {
		const { data } = yield call(() => api.get(`users/`, payload))
		console.log('fetchUsers api.get data ', data)
		yield call(actions.FETCH_USERS.SUCCESS(data))

		callback && typeof callback === 'function' && callback()
	} catch (err) {
		yield call(
			actions.FETCH_USERS.FAILED({
				error: err.response.data.detail,
			})
		)
	}
}

function* createUser({ payload, callback }) {
	try {
		const { data } = yield call(() => api.post(`users/`, payload))
		console.log('createUser api.post data ', data)
		yield put(actions.ADD_USER.SUCCESS(data))

		callback && typeof callback === 'function' && callback()
	} catch (err) {
		yield put(
			actions.ADD_USER.FAILED({
				error: err.response.data.detail,
			})
		)
	}
}

export default function* userWatcher() {
	yield takeLatest(types.FETCH_USERS.REQUEST, fetchUsers)
	yield takeLatest(types.ADD_USER.REQUEST, createUser)
}
