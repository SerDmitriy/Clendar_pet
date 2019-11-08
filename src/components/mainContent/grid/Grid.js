import React from 'react'
import './grid.scss'
import Hour from './Hour/Hour'
import { getFullHours, getMinutes} from '../../../utils/time'

class Grid extends React.Component {


  getFullHour = (id) => {
    const { tasks } = this.props
    let task = tasks.find( task => task.id === id ) 
    getFullHours(task.start)
    console.log(getFullHours(task.start))
    console.log(getMinutes(task.start))
    return task
  }

  render () {
    const { startTime, tasks } = this.props
    console.log('Grid tasks', tasks)
    console.log('Grid hour', this.getFullHour(5))
    console.log('Grid minutes', this.getFullHour(5))

    
    return (
      <React.Fragment>
        <div className='grid-wrapper'>Grid</div>
        <Hour startTime={8} tasks={tasks}/>
      </React.Fragment>
    )
  }
}

export default Grid
