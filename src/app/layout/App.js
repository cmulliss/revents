import React, { Component } from 'react'
import EventDashboard from '../../features/event/event-dashboard/event-dashboard'
import NavBar from '../../features/nav/navbar/nav-bar'
import './App.css'
import '../../index.css'

class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <EventDashboard />
      </div>
    )
  }
}

export default App
