import { call, put, takeLatest } from 'redux-saga/effects'
import { actions, types } from '../actions/usersActions'
import { Api } from '../entries/ApiTransport'

const api = Api.getInstance()

function* fetchUsers({ payload, callback }) {
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
		yield put(actions.CREATE_NEW_USER.SUCCESS(data))

		callback && typeof callback === 'function' && callback()
	} catch (err) {
		yield put(
			actions.CREATE_NEW_USER.FAILED({
				error: err.response.data.detail,
			})
		)
	}
}

export default function* userWatcher() {
	yield takeLatest(types.FETCH_USERS.REQUEST, fetchUsers)
	yield takeLatest(types.CREATE_NEW_USER.REQUEST, createUser)
}
