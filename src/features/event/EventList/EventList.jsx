/*jshint esversion: 6 */

import React, { Component } from 'react';
import EventListItem from './/EventListItem';

class EventList extends Component {
  render() {
    const {events} = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {/* loop repeat events for array in EventDashboard */}
        {events.map((event) => (
          <EventListItem  key={event.id} event={event}/>
        ))}
        
      </div>
    )
  }
}

export default EventList