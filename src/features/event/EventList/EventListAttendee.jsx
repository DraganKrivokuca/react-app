/*jshint esversion: 6 */

import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class EventListAttendee extends Component {
  render() {
    // declaration property 
    const {atendee} = this.props;  
    return (
      <List.Item>
        {/* use nthis property */}
       <Image as='a' size='mini' circular src = {atendee.photoURL} />
      </List.Item>
    )
  }
}

export default  EventListAttendee