import React, { Component } from 'react'
import { Menu, Sidebar } from 'semantic-ui-react'
import { publicRouter, privatRouter } from '../../routes'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import './SemanticNavBar'

class SidebarExampleTransitions extends Component {
	state = {
		animation: 'push',
		dimmed: false,
		visible: true,
	}

	render() {
		const { animation, visible } = this.state
		const { push } = this.props

		return (
			<Sidebar as={Menu} animation={animation} inverted vertical visible={visible} width='thin'>
				{publicRouter.map(route => (
					<Menu.Item as='a' key={route.path} onClick={() => push(route.path)}>
						{route.path}
					</Menu.Item>
				))}
				{privatRouter.map(route => (
					<Menu.Item as='a' key={route.path} onClick={() => push(route.path)}>
						{route.path}
					</Menu.Item>
				))}
			</Sidebar>
		)
	}
}

export default connect(null, { push })(SidebarExampleTransitions)
