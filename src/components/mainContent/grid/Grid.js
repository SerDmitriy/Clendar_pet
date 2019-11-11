import React from 'react'
import './grid.scss'
import Hour from './Hour/Hour'
import TimeGrid from './TimeGrid/TimeGrid'
import { taskTime } from '../../../utils/time'

class Grid extends React.Component {


  getTaskParams = (id) => {
    const { tasks } = this.props
    let task = tasks.find( task => task.id === id ) 
    console.log(taskTime(task))
    return taskTime(task)
  }

  render () {
    const { tasks } = this.props
    // console.log('Grid tasks', tasks)
    // console.log('Grid hour', this.getFullHour(5))
    this.getTaskParams(2)
    this.getTaskParams(4)

    return (
      <React.Fragment>
        <div className='grid-wrapper'>Grid</div>
        <TimeGrid/>
        <Hour tasks={tasks}/>
      </React.Fragment>
    )
  }
}

export default Grid
