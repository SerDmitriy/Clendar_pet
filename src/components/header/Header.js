import './header.scss'
import React from 'react'
import { actions } from '../../actions/rootActions'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { LANGS } from '../../constants'

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	handleChangeLang = lang => {
		const { langUsers, i18n, user } = this.props

		langUsers({ ...user, lang })
		i18n.changeLanguage(lang)
	}

	render() {
		// const {} = this.state
		const { addUser, user, fetchUsers } = this.props

		console.log('Header actions ', actions)
		console.log('Header user ', user)

		return (
			<React.Fragment>
				<div className='header-wrapper'>
					<button className='header-wrapper__lang' onClick={() => addUser({ lang: 'de' })} key={123}>
						{'addUser'}
					</button>
					<button className='header-wrapper__lang' onClick={() => fetchUsers({ lang: 'de' })} key={77123}>
						{'fetchUsers'}
					</button>
					{LANGS.map(lang => (
						<button className='header-wrapper__lang' onClick={() => this.handleChangeLang(lang)} key={lang}>
							{lang}
						</button>
					))}
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({ user: state.usersReducer })

const mapDispatchToProps = dispatch => ({
	langUsers: data => dispatch(actions.UPDATE_USER.SUCCESS(data)),
	fetchUsers: data => dispatch(actions.FETCH_USERS.REQUEST(data)),
	addUser: data => dispatch(actions.ADD_USER.REQUEST(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Header))
