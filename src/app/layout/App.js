import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/event/event-dashboard/event-dashboard'
import NavBar from '../../features/nav/navbar/nav-bar'
import './App.css'
import '../../index.css'

class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Container className='main'>
          <EventDashboard />
        </Container>
      </div>
    )
  }
}

export default App
