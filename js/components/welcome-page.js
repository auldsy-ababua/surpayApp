var connect = require('react-redux').connect;
import React, { Component } from 'react';
import store from '../store';
import actions from '../actions';
import { Jumbotron, Button } from 'react-bootstrap';

export class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Jumbotron>
        <div className='container'>
          <h1>Welcome to SurPay!</h1>
          <p>The app that gets you discounts on your bill in exchange for answering a few short questions about your dining experience!</p>
        </div>
      </Jumbotron>
    );
  }
};

var mapStateToProps = function(state, props) {
    return {
        error: state.error
    };
};

var Container = connect(mapStateToProps)(WelcomePage);

export default Container;
