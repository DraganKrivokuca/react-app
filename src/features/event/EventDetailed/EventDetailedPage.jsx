/*jshint esversion: 6 */
import React from "react";
import { Grid } from "semantic-ui-react";
import  EventDetailedHeader  from "./EventDetailedHeader";
import  EventDetailedChat  from "./EventDetailedChat";
import  EventDetailedSidebar from "./EventDetailedSidebar";
import  EventDetailedInfo  from "./EventDetailedInfo";

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader />
        <EventDetailedInfo />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailedPage
