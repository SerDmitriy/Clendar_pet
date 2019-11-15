import './calendars.scss'
import React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import i18n from '../../../i18n'

class Calendars extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			calendars: ['mocked calendar', '234', '345'],
			lang: 'en',
		}
	}

	handleChange = lang => {
		this.setState({ lang: lang.target.value })
	}

	render() {
		const { calendars } = this.state
		const { push, lang } = this.props
		console.log(lang)

		return (
			<React.Fragment>
				<button onClick={() => push('/users')}>{i18n.t('Add calendar')}</button>
				{i18n.t('Welcome to React')}
				<br />
				{calendars.map(user => (
					<button key={user}>{user}</button>
				))}
				<select id='lang' onChange={this.handleChange}>
					<option value='en'>En</option>
					<option value='ru'>Ru</option>
					<option value='de'>De</option>
					<option value='ua'>Ua</option>
				</select>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	lang: state.usersReducer.lang,
})
export default connect(mapStateToProps, { push })(Calendars)
