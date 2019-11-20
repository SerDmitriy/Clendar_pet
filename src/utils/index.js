export const genKey = () => {
	return Math.random()
		.toString(16)
		.slice(3, 10)
}

const statuses = ['REQUEST', 'SUCCESS', 'FAILED', 'CLEAR']

export const actionsCreator = actionTypes => {
	const actions = {}
	const types = {}
	actionTypes.forEach(actionType => {
		actions[actionType] = {}
		types[actionType] = {}

		statuses.forEach(status => {
			actions[actionType][status] = (payload, callback, options) => ({
				type: `${actionType}_${status}`.toUpperCase(),
				payload,
				callback,
				options,
			})

			types[actionType][status] = `${actionType}_${status}`.toUpperCase()
		})
	})

	return { actions, types }
}
