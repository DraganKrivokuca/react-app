/*jshint esversion: 6 */

import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form, Segment, Button } from "semantic-ui-react";
import { createEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';



const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if(eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return { 
    event
  }
}

const actions = {
  createEvent,
  updateEvent
}

class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    if(this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    }else {
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
      }
      this.props.createEvent(newEvent);
      this.props.history.push('/events')
    }
    console.log(this.state.event);
  }

  onInputChange(evt) {
    const NewEvent = this.state.event;
    NewEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: NewEvent
    });
  }

  render() {
    const { handleCancel } = this.props;
    const { event } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit.bind(this)}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.onInputChange.bind(this)}
              value={event.title}
              placeholder="Event title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              type="date"
              name="date"
              onChange={this.onInputChange.bind(this)}
              value={event.date}
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange.bind(this)}
              value={event.city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onInputChange.bind(this)}
              value={event.venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange.bind(this)}
              value={event.hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(mapState, actions)(EventForm);
