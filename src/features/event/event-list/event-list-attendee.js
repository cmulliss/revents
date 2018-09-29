import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

export default class EventListAtendee extends Component {
  render () {
    return (
      <List.Item>
        <Image
          as='a'
          size='mini'
          src='https://randomuser.me/api/portraits/women/42.jpg'
        />
      </List.Item>
    )
  }
}
