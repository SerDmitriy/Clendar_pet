import React from 'react'
import './timeGrid.scss'

class TimeGrid extends React.Component {
  
  render () {
    let time = []
    for (let i = 8; i < 17; i++) {
      time.push({
        className: 'timeGrid-hour',
        data: `${i}-00`,
      })
      time.push({
        className: 'timeGrid-hour-secondary',
        data: `${i}-30`,
      })
    }
    console.log('TimeGrid props', this.props)

    console.log('TimeGrid time', time)
    return (
        <div className='timeGrid'>
          {time.map( item => 
            <div key={item.data} className={item.className}>{item.data}</div>
            )}
        </div>
    )
  }
}

export default TimeGrid
