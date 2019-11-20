import React, { Component } from 'react'
import { Menu, Sidebar } from 'semantic-ui-react'
import { publicRouter, privatRouter } from '../../routes'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import './SemanticNavBar'
import { withTranslation } from 'react-i18next'

class SidebarExampleTransitions extends Component {
	state = {
		animation: 'push',
		dimmed: false,
		visible: true,
	}

	render() {
		const { animation, visible } = this.state
		const { push, t } = this.props
		return (
			<Sidebar as={Menu} animation={animation} inverted vertical visible={visible} width='thin'>
				{publicRouter.map(route => (
					<Menu.Item as='a' key={route.path} onClick={() => push(route.path)}>
						{t(route.name)}
					</Menu.Item>
				))}
				{privatRouter.map(route => (
					<Menu.Item as='a' key={route.path} onClick={() => push(route.path)}>
						{t(route.name)}
					</Menu.Item>
				))}
			</Sidebar>
		)
	}
}

export default connect(null, { push })(withTranslation()(SidebarExampleTransitions))
