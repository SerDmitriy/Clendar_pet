import './calendars.scss'
import React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { ROUTER_PATH } from '../../../constants'

class Calendars extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			calendars: ['Add calendar', 'Fetch calendar', 'Del calendar'],
		}
	}

	render() {
		const { calendars } = this.state
		const { push, t } = this.props

		return (
			<React.Fragment>
				<button onClick={() => push(ROUTER_PATH.CALENDAR)}>{t('Go to default calandar')}</button>
				{t('Welcome to React')}
				<br />
				{calendars.map(user => (
					<button key={user}>{user}</button>
				))}
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	lang: state.usersReducer.lang,
})
export default connect(mapStateToProps, { push })(withTranslation(Calendars))
