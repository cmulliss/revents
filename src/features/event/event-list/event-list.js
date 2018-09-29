import React, { Component } from 'react'
import EventListItem from './event-list-item'

export default class EventList extends Component {
  render () {
    return (
      <div>
        <h1>EventList</h1>
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </div>
    )
  }
}
