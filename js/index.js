"use strict"
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
var Provider = require('react-redux').Provider;
import {router, Router, Route, hashHistory, Link, IndexRoute} from 'react-router';


import store from './store';
import Login from'./components/login';
import SignUp from'./components/sign-up';
import WelcomePage from './components/welcome-page';
import Search from './components/search';
import Survey from './components/survey';
import Rewards from './components/rewards';
import Navigation from './components/nav';
import Footer from './components/footer';
import {Component} from "react";
import {getUser} from "./actions";


export class SurpayApp extends Component {
    componentDidMount() {
      if (localStorage["basicStrategy"] && localStorage["basicStrategy"] != "null") {
        console.log("hahahaha", localStorage["basicStrategy"])
        this.props.dispatch(getUser());
      }
      console.log(localStorage["basicStrategy"], "hi");
    }
    render() {
        return (
          <div>
            <Navigation />
            {this.props.children}
            <Footer />
          </div>
        );
    }
};

var Container = connect()(SurpayApp);

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Container}>
            <IndexRoute component={WelcomePage} />
              <Route path="search" component={Search}/>
              <Route path="survey/:restaurantid" component={Survey}/>
              <Route path="rewards" component={Rewards}/>
        </Route>
    </Router>
);



//Use ReactDOM.render to render the Game component into the <div>
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
      <Provider store={store}>
        {routes}
      </Provider>, document.getElementById('app')
    );
});
