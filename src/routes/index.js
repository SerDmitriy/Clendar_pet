import React from 'react'
import Calendar from '../components/mainContent/Calendar/Calendar'
import Calendars from '../components/mainContent/Calendars/Calendars'
import Users from '../components/mainContent/Users/Users'
import { ROUTER_PATH } from '../constants'

export const publicRouter = [
	{
		exact: true,
		path: ROUTER_PATH.CALENDAR,
		component: Calendar,
	},
	{
		exact: true,
		path: ROUTER_PATH.CALENDARS,
		component: Calendars,
	},
	{
		exact: true,
		path: ROUTER_PATH.LOGIN,
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
		component: Users,
	},
]
