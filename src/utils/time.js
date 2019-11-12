export function taskTime(task) {
	const taskParams = {
		startHour: parseInt(task.start / 60) + 8,
		startMin: task.start % 60,
		finishHour: parseInt((task.start + task.duration) / 60) + 8,
		finishMin: (task.start + task.duration) % 60,
	}
	return taskParams
}
