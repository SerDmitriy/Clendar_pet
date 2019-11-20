import './users.scss'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import React from 'react'
import { actions } from '../../../actions/usersActions'
import RegisterUser from '../RegistrationSemanticUi/RegisterUser'

class Users extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		const { addUser, t } = this.props
		return (
			<React.Fragment>
				<RegisterUser />
				<button className='header-wrapper__lang' onClick={() => addUser({ id: 5 })}>
					{t('Add user')}
				</button>
				<br />
			</React.Fragment>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetchUsers: data => dispatch(actions.FETCH_USERS.REQUEST(data)),
	addUser: data => dispatch(actions.ADD_USER.REQUEST(data)),
})

export default connect(null, mapDispatchToProps)(withTranslation()(Users))
