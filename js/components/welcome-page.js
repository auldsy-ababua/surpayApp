var connect = require('react-redux').connect;
import React, { Component } from 'react';
import store from '../store';
import actions from '../actions';
import { Jumbotron, Button, Image, Panel } from 'react-bootstrap';

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
          <Panel header="Getting Started">
            Above, you can sign up or log in to your account. You can search for resaurants in your area and leave your thoughts in the survey section.
          </Panel>
          <Panel header="Demonstration Credentials">
            UN: demo@gmail.com
            <br></br>
            PW: Hello123 (case sensitive)
          </Panel>
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
