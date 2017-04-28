var connect = require('react-redux').connect;
import React, { Component } from 'react';
import store from '../store';
import actions from '../actions';
import { Jumbotron, Button, Image } from 'react-bootstrap';

export class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="homePage">
        <div className="heroImage">
          <div className="transbox">
            <h1>Welcome to SurPay</h1>
            <h2>The Site that Pays You for Your Opinions!</h2>
          </div>
        </div>
        <div className="boxContainer">
          <div className="boxLeft homeInstruction">
            <h3 className="flex-center-vertically">Get started above by signing up or logging into your account. You can search for resaurants in your area and leave your thoughts in the survey section.</h3>
          </div>
          <div className="boxRight homeInstruction">
            <h3>Demo signin credentials:</h3>
            <h3>UN: demo [at] gmail [dot] com</h3>
            <h3>PW: Hello123</h3>
          </div>
        </div>
      </div>

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
