import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import './nav.scss'
import { publicRouter, privatRouter } from '../../routes'

function NavBar(props) {
	const { push } = props

	return (
		<div className='navBar'>
			{publicRouter.map(route => (
				<button className='navBar__button' key={route.path} onClick={() => push(route.path)}>
					{route.path}
				</button>
			))}
			{privatRouter.map(route => (
				<button className='navBar__button' key={route.path} onClick={() => push(route.path)}>
					{route.path}
				</button>
			))}
		</div>
	)
}

export default connect(null, { push })(NavBar)
