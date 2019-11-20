import React from 'react'
import Calendar from '../components/mainContent/Calendar/Calendar'
import Calendars from '../components/mainContent/Calendars/Calendars'
import Users from '../components/mainContent/Users/Users'
import { ROUTER_PATH, ROUTER_NAME } from '../constants'

export const publicRouter = [
	{
		exact: true,
		path: ROUTER_PATH.CALENDAR,
		name: ROUTER_NAME.CALENDAR,
		component: Calendar,
	},
	{
		exact: true,
		path: ROUTER_PATH.CALENDARS,
		name: ROUTER_NAME.CALENDARS,
		component: Calendars,
	},
	{
		exact: true,
		path: ROUTER_PATH.LOGIN,
		name: ROUTER_NAME.LOGIN,
		component: () => (
			<div>
				{'login'}
				<br />
				<a href='/'>Home page</a>
			</div>
		),
	},
	{
		exact: true,
		path: ROUTER_PATH.REGISTRATION,
		name: ROUTER_NAME.REGISTRATION,
		component: () => (
			<div>
				{'registration'}
				<br />
				<a href='/'>Home page wmebfewhbfejw bhejwh ewjhf ewjhfg jwehgf je</a>
			</div>
		),
	},
	{
		exact: true,
		path: ROUTER_PATH.HOME,
		name: ROUTER_NAME.HOME,
		component: () => (
			<div>
				{'Home page'}
				<br />
				<a href='/calendar'>Calendar</a>
				<br />
				<a href='/'>Home page</a>
			</div>
		),
	},
]

export const privatRouter = [
	{
		exact: true,
		path: ROUTER_PATH.USERS,
		name: ROUTER_NAME.USERS,
		component: Users,
	},
]
