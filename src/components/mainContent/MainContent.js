import React from 'react'
import './maincontent.scss'
import Grid from './grid/Grid'

class Maincontent extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="mainContent">Maincontent</div>
        <Grid/>
      </React.Fragment>
    )
  }
}

export default Maincontent