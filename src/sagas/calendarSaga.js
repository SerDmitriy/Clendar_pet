import { call, put, takeLatest } from 'redux-saga/effects'
import { actions, types } from '../actions/calendarActions'
import { Api } from '../entries/ApiTransport'
import { API } from '../constants'

const api = Api.getInstance()

function* fetchCalendar({ payload, callback }) {
	try {
		const { data } = yield call(() => api.get(API.CALEDAR, payload))
		yield call(actions.FETCH_CALENDAR.SUCCESS(data))

		callback && typeof callback === 'function' && callback()
	} catch (err) {
		yield call(
			actions.FETCH_CALEDAR.FAILED({
				error: err.response.data.detail,
			})
		)
	}
}

function* createCalendar({ payload, callback }) {
	try {
		const { data } = yield call(() => api.post(API.CALEDAR, payload))
		yield put(actions.ADD_CALENDAR.SUCCESS(data))

		callback && typeof callback === 'function' && callback()
	} catch (err) {
		yield put(
			actions.ADD_CALENDAR.FAILED({
				error: err.response.data.detail,
			})
		)
	}
}

export default function* calendarWatcher() {
	yield takeLatest(types.FETCH_CALENDAR.REQUEST, fetchCalendar)
	yield takeLatest(types.ADD_CALENDAR.REQUEST, createCalendar)
}
