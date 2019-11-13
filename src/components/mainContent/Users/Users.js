import './users.scss'
import React from 'react'

class Users extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			users: ['Tom', 'Sam', 'Bob'],
		}
	}
	render() {
		const { users } = this.state
		return (
			<React.Fragment>
				<button>Add user</button>
				<br />
				{users.map(user => (
					<button key={user}>{user}</button>
				))}
			</React.Fragment>
		)
	}
}

export default Users
