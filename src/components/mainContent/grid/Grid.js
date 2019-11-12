import React from 'react'
import './grid.scss'
import Task from './Task/Task'
import TimeGrid from './TimeGrid/TimeGrid'
import { taskTime } from '../../../utils/time'

class Grid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: [
        {
          id: 1,
          start: 0,
          duration: 15,
          title: 'Exercise',
        },
        {
          id: 2,
          start: 25,
          duration: 30,
          title: 'Travel to work',
        },
        {
          id: 3,
          start: 30,
          duration: 30,
          title: 'Plan day',
        },
        {
          id: 4,
          start: 60,
          duration: 15,
          title: "Review yesterday's commits",
        },
        {
          id: 5,
          start: 100,
          duration: 15,
          title: 'Code review',
        },
        {
          id: 6,
          start: 180,
          duration: 90,
          title: 'Have lunch with John',
        },
        {
          id: 7,
          start: 360,
          duration: 30,
          title: 'Skype call',
        },
        {
          id: 8,
          start: 370,
          duration: 45,
          title: 'Follow up with designer',
        },
        {
          id: 9,
          start: 405,
          duration: 30,
          title: 'Push up branch',
        },
      ]
    }
  }
  getTaskParams = id => {
    const { tasks } = this.state
    let task = tasks.find( task => task.id === id ) 
    return taskTime(task)
  }

  render () {
    const { tasks } = this.state
    let newTasks = JSON.parse(JSON.stringify(tasks))

    newTasks.forEach( t => delete t.id)
    console.log(JSON.stringify(newTasks))

    tasks.forEach(task => {
      task.taskParams = this.getTaskParams(task.id)
      task.primary = null
    });
    tasks.forEach((task, index) => {
      for (let i = index + 1; i < tasks.length; i++) {
        if ( (task.start + task.duration) > (tasks[i].start) ) {
          if (task.primary === null) {task.primary = true}
            else { 
              tasks[i].primary = !task.primary
              break
          }
          if (tasks[i].primary === null) {tasks[i].primary = false}
            else { 
              tasks[i].primary = !tasks[i].primary
          }
        }
      }

    })

    return (
      <React.Fragment>
        <TimeGrid/>
        {tasks.map( task => <Task key={task.id} task={task}/>)}
      </React.Fragment>
    )
  }
}

export default Grid
