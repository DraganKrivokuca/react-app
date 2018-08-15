/*jshint esversion: 6 */

import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    event: {
      title: '',
      date: '',
      city: '',
      venue: '',
      hostedBy: ''
    }
  }

  onInputChange(evt) {
    const NewEvent = this.state.event;
    NewEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: NewEvent
    });
  }

  onFormSubmit(evt){
    evt.preventDefault();
    console.log(this.state.event);
    
  }
  render() {
    const {handleCancel} = this.props;
    const {event} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit.bind(this)}>
          <Form.Field>
            <label>Event Title</label>
            <input name='title' onChange={this.onInputChange.bind(this)} value={event.title} placeholder="Event title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input type="date" name="date" onChange={this.onInputChange.bind(this)} value={event.date} placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name='city' onChange={this.onInputChange.bind(this)} value={event.city} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name='venue' onChange={this.onInputChange.bind(this)} value={event.venue} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name='hostedBy' onChange={this.onInputChange.bind(this)} value={event.hostedBy} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
