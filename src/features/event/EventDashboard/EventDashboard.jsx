/*jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

const mapState = (state) => ({
  events: state.events
});


class EventDashboard extends Component {
  state = {
      isOpen: false,
      selectedEvent: null
    };


  

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen:true
    });
  }

  handleCancel = () => {
    this.setState({
      isOpen:false
    });
  };

  handleCreateEvent(NewEvent) {
    NewEvent.id = cuid();
    NewEvent.hostPhotoURL = '/assets/user.png';
    const updateEvent = [...this.state.events, NewEvent];
    this.setState({
      events: updateEvent,
      isOpen: false
    });
  }

  handleUpdateEvent(updatedEvent) {
    this.setState({
      events: this.state.events.map(event => {
        if(event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    });
  }

  handleDeleteEvent = (eventId) => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    })
  }

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen:true
    });
  }

  render() {
    const {selectedEvent} = this.state;
    const {events} = this.props; 
    return (
      <Grid>
        <Grid.Column width={10}>
           <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events = {events}/>
        </Grid.Column>
        <Grid.Column width={6}>
        <Button onClick={this.handleFormOpen} positive content = "Create Event" />
        {this.state.isOpen && (
        <EventForm updateEvent={this.handleUpdateEvent.bind(this)} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent.bind(this)} handleCancel={this.handleCancel}/>
    )}
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapState) (EventDashboard);