import React from 'react'
import './task.scss'

function Task(props) {
	const { task } = props
	const style = {
		top: `${20 + (task.taskParams.startHour - 8) * 100 + (task.taskParams.startMin / 60) * 100}px`,
		height: `${Math.round((task.duration / 60) * 100)}px`,
		width: `${task.primary === null ? 200 : 98}px`,
		left: `${task.primary === false ? 100 : 0}px`,
	}
	return (
		<div className='task' style={style}>
			{task.title}
		</div>
	)
}

export default Task
