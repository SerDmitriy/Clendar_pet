import React from 'react'
import './maincontent.scss'
import Grid from './grid/Grid'

class Maincontent extends React.Component {
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
  render () {
    const { tasks } = this.state
    console.log('Maincontent tasks', tasks)
    return (
      <React.Fragment>
        <div className="mainContent">Maincontent</div>
        <Grid tasks={tasks}/>
      </React.Fragment>
    )
  }
}

export default Maincontent