import './header.scss'
import React from 'react'
import { actions } from '../../actions/usersActions'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import i18n from '../../i18n'
import { LANGS_CAPITAL } from '../../constants'

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	handleChangeLang = e => {
		const { langUsers, user } = this.props
		const lang = e.target.value
		langUsers({ ...user, lang })
		i18n.changeLanguage(lang)
	}

	render() {
		const { addUser, t } = this.props

		return (
			<React.Fragment>
				<div className='header-wrapper'>
					<button className='header-wrapper__lang' onClick={() => addUser({ id: 5 })} key={123}>
						{t('Add user')}
					</button>
					<select className='lang__select' onChange={this.handleChangeLang}>
						{LANGS_CAPITAL.map(lang => (
							<option key={lang} value={lang.toLowerCase()}>
								{lang}
							</option>
						))}
					</select>
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({ user: state.usersReducer })

const mapDispatchToProps = dispatch => ({
	langUsers: data => dispatch(actions.UPDATE_USER.SUCCESS(data)),
	addUser: data => dispatch(actions.ADD_USER.REQUEST(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Header))
