var actions = require('../actions');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, Navitem, handleSelect, NavItem, OverlayTrigger, Popover } from 'react-bootstrap';
import { Login } from './login';
import { SignUp } from './sign-up';

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(selectedKey) {
    if (selectedKey === 2) {

    }
    console.log("hello");
  }
  render() {
    return (
      <Navbar>
        <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} title="Search">Search</NavItem>
          <NavItem eventKey={3} title="Rewards">Rewards</NavItem>
        </Nav>
        <Nav pullRight>
          <OverlayTrigger
                rootClose
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id="popover-trigger-click-root-close" title="Enter username and password below">
                    <Login />
                  </Popover>
                }
              >
                <NavItem eventKey={1} href="#">Login</NavItem>
          </OverlayTrigger>
          <OverlayTrigger
                rootClose
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id="popover-trigger-click-root-close" title="Fill Out This Form to Get Started!">
                    <SignUp />
                  </Popover>
                }
              >
                <NavItem eventKey={2} href="#">Sign-Up</NavItem>
          </OverlayTrigger>
        </Nav>
      </Navbar>
    );
  }
};

var mapStateToProps = function(state, props) {
    return {
        error: state.error
    };
};

var Container = connect(mapStateToProps)(Navigation);

export default Container;
