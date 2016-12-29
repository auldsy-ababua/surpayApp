var redux = require('redux');
import { middleware as reduxPackMiddleware } from 'redux-pack';
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var reducers = require('./reducers');

const store = createStore(reducers.SurpayApp, applyMiddleware(thunk, reduxPackMiddleware));
module.exports  = store;
