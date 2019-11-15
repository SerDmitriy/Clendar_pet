import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import { publicRouter, privatRouter } from './routes'
import { Switch, Route } from 'react-router'
import { Segment, Sidebar } from 'semantic-ui-react'
import SemanticNavBar from './components/nav/SemanticNavBar'
import Header from './components/header/Header'
import { withTranslation } from 'react-i18next'

function App() {
	return (
		<Sidebar.Pushable as={Segment}>
			<SemanticNavBar />

			<Sidebar.Pusher>
				<Segment basic>
					<Header />
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

const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps, null)(withTranslation()(App))
