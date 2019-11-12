import React from 'react'
import './App.css'
import NavBar from './components/nav/Nav'
import { publicRouter, privatRouter } from './routes/index'
import { Switch, Route } from 'react-router'

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Switch>
				{publicRouter.map(route => (
					<Route key={`publicRouter + ${route.path}`} {...route} />
				))}
				{privatRouter.map(route => (
					<Route key={`privatRouter + ${route.path}`} {...route} />
				))}
			</Switch>
		</div>
	)
}

export default App
