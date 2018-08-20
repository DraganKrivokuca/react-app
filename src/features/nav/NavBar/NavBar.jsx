/*jshint esversion: 6 */
import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn() {
    this.setState({
      authenticated: true
    });
  }

  handleSignOut() {
    this.setState({
      authenticated: false
    });
    // this.props.history.push('/');
  }

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" header>
            <img src="assets/logo.png" alt="logo" />
            Re-play
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />

          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut.bind(this)} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn.bind(this)} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
