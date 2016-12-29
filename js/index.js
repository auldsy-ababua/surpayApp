"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
var Provider = require('react-redux').Provider;
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;


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


export class SurpayApp extends Component {
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

var IndexRoute = router.IndexRoute;

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={SurpayApp}>
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
