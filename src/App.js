import React from 'react'
import './App.css'
import { publicRouter, privatRouter } from './routes'
import { Switch, Route } from 'react-router'
import { Segment, Sidebar } from 'semantic-ui-react'
import SemanticNavBar from './components/nav/SemanticNavBar'

function App() {
	return (
		<Sidebar.Pushable as={Segment}>
			<SemanticNavBar />

			<Sidebar.Pusher>
				<Segment basic>
					<Switch>
						{publicRouter.map(route => (
							<Route key={`publicRouter + ${route.path}`} {...route} />
						))}
						{privatRouter.map(route => (
							<Route key={`privatRouter + ${route.path}`} {...route} />
						))}
					</Switch>
				</Segment>
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	)
}

export default App
