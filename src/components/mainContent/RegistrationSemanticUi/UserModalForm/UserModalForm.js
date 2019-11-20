import React from 'react'
import './userModalForm.scss'
import { Form, ErrorMessage, Field } from 'formik'
import { Button } from 'semantic-ui-react'

class UserModalForm extends React.Component {
	handleChangeFileField = e => {
		const { handleChange, setFieldValue } = this.props

		e.persist()

		const file = e.target.files[0]
		handleChange(e)

		const reader = new FileReader()
		reader.onload = () => {
			setFieldValue('fileStr', reader.result)
		}

		reader.readAsDataURL(file)
	}

	render() {
		const {
			values: { firstName, lastName, email, password, imageFile },
			handleBlur,
			handleChange,
			handleSubmit,
		} = this.props

		return (
			<Form onSubmit={handleSubmit}>
				<div className='bold-text'>Input your first name</div>
				<Field
					placeholder='First name'
					name='firstName'
					className='registration__input'
					value={firstName}
					onBlur={handleBlur}
					onChange={handleChange}
				></Field>
				<ErrorMessage className='error-message' name='firstName' component='div' />
				<div className='bold-text'>Input your last name</div>
				<Field
					placeholder='Last name'
					name='lastName'
					className='registration__input'
					value={lastName}
					onBlur={handleBlur}
					onChange={handleChange}
				></Field>
				<ErrorMessage className='error-message' name='lastName' component='div' />
				<div className='bold-text'>Input your email</div>
				<Field
					placeholder='example@mail.com'
					name='email'
					value={email}
					className='registration__input'
					onBlur={handleBlur}
					onChange={handleChange}
				></Field>
				<ErrorMessage className='error-message' name='email' component='div' />
				<div className='bold-text'>Input your password</div>
				<Field
					placeholder='password'
					name='password'
					value={password}
					className='registration__input'
					type='password'
					onBlur={handleBlur}
					onChange={handleChange}
				></Field>
				<ErrorMessage className='error-message' name='password' component='div' />
				<div className='bold-text'>Input your password</div>
				<Field
					type='file'
					accept='image/png, image/jpeg'
					name='imageFile'
					value={imageFile}
					placeholder='password'
					onBlur={handleBlur}
					onChange={this.handleChangeFileField}
					className='registration__input'
				></Field>
				<ErrorMessage className='error-message' name='imageFile' component='div' />
				<Button type='reset'>Reset</Button>
				<Button type='submit'>Save</Button>
			</Form>
		)
	}
}

export default UserModalForm
