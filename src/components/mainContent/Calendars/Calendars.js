import './calendars.scss'
import React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'

class Calendars extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			calendars: ['mocked calendar', '234', '345'],
		}
	}
	render() {
		const { calendars } = this.state
		const { push } = this.props

		return (
			<React.Fragment>
				<button>Add calendar</button>
				<br />
				{calendars.map(user => (
					<button key={user} onClick={() => push('/calendar')}>
						{user}
					</button>
				))}
			</React.Fragment>
		)
	}
}

export default connect(null, { push })(Calendars)
