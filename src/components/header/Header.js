import './header.scss'
import React from 'react'
import { actions } from '../../actions/rootActions'
import { connect } from 'react-redux'

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			langs: ['en', 'ru', 'ua', 'de'],
		}
	}
	render() {
		const { langs } = this.state
		const { langUsers } = this.props

		console.log('actions ', actions)

		return (
			<React.Fragment>
				<div className='header-wrapper'>
					<button className='header-wrapper__lang' onClick={() => langUsers({ lang: 'de' })} key={123}>
						{'De lang'}
					</button>
					{langs.map(user => (
						<button className='header-wrapper__lang' onClick={() => langUsers({ lang: user })} key={user}>
							{user}
						</button>
					))}
				</div>
			</React.Fragment>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	langUsers: data => dispatch(actions.LANG.SUCCESS(data)),
})

export default connect(null, mapDispatchToProps)(Header)
