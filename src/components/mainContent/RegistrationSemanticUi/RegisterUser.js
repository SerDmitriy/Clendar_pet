import React from 'react'
import { connect } from 'react-redux'
import { Button, Header, Modal } from 'semantic-ui-react'
import { actions } from '../../../actions/usersActions'
import './RegisterUser.scss'
import * as Yup from 'yup'
import { TEXT_ERR_MSG } from '../../../constants'
import { Formik } from 'formik'
import FormSignIn from './UserModalForm/UserModalForm'

class RegisterUser extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			initialValues: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				imageFile: '',
				fileStr: '',
			},
			validationSchema: Yup.object({
				firstName: Yup.string()
					.min(3, `3 + ${TEXT_ERR_MSG.minSymbols}`)
					.required(TEXT_ERR_MSG.textErrReq),
				lastName: Yup.string().required(TEXT_ERR_MSG.textErrReq),
				email: Yup.string('')
					.email(TEXT_ERR_MSG.email)
					.required(TEXT_ERR_MSG.textErrReq),
				password: Yup.string('')
					.min(8, `8 + ${TEXT_ERR_MSG.minSymbols}`)
					.required(TEXT_ERR_MSG.textErrReq),
				imageFile: Yup.string('').required(TEXT_ERR_MSG.textErrReq),
			}),
		}
	}

	render() {
		const { initialValues, validationSchema } = this.state
		const { addUser } = this.props

		return (
			<Modal trigger={<Button>Create user</Button>}>
				<Modal.Header>Create new user</Modal.Header>
				<Modal.Content image>
					<Modal.Description>
						<Header>Default Header</Header>
						<Formik
							initialValues={initialValues}
							onSubmit={values => addUser(values)}
							validationSchema={validationSchema}
						>
							{props => <FormSignIn {...props} />}
						</Formik>
					</Modal.Description>
				</Modal.Content>
			</Modal>
		)
	}
}
const mapDispatchToProps = dispatch => ({
	fetchUsers: data => dispatch(actions.FETCH_USERS.REQUEST(data)),
	addUser: data => dispatch(actions.ADD_USER.REQUEST(data)),
})

export default connect(null, mapDispatchToProps)(RegisterUser)
