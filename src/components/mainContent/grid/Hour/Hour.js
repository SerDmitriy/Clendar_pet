import React from 'react'
import './hour.scss'

class Hour extends React.Component {
  

  render () {
    const { startTime, tasks } = this.props
    console.log(this.props)
    return (
      <React.Fragment>
        <div className='hour'>Grid</div>
      </React.Fragment>
    )
  }
}

export default Hour