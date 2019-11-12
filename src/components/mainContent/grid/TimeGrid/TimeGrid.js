import React from 'react'
import './timeGrid.scss'

function TimeGrid () {
  
  render () {
    let time = []
    for (let i = 8; i < 18; i++) {
      time.push({
        className: 'timeGrid-hour',
        data: `${i > 12 ? i - 12 : i}-00`,
      })
      time.push({
        className: 'timeGrid-hour-secondary',
        data: `${i > 12 ? i - 12 : i}-30`,
      })
    }
    time.pop()

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
