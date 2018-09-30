import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../event-list/event-list'
import EventForm from '../event-form/event-form'

export default class EventDashboard extends Component {
  render () {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button positive content='Create Event' />
          <EventForm />
        </Grid.Column>
      </Grid>
    )
  }
}
