import { all, fork } from 'redux-saga/effects'

import usersWatcher from './usersSaga'
import calendarWatcher from './calendarSaga'

export default function* rootSaga() {
	yield all([fork(usersWatcher), fork(calendarWatcher)])
}
