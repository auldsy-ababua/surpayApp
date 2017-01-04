var connect = require('react-redux').connect;
import React, { Component } from 'react';
import store from '../store';
import actions from '../actions';
import ReactDOM from 'react-dom';


import {  } from 'react-bootstrap';


export class Rewards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
    );
  }
};

var mapStateToProps = function(state, props) {
    return {
        error: state.error
    };
};

var Container = connect(mapStateToProps)(Rewards);

export default Container;
