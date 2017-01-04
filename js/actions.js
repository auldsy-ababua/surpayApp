var $ = require("jquery");
var fetch = require('isomorphic-fetch');
import OAuthSimple from 'oauthsimple';


//Get and Post User actions are for logging into and signing up for the surpay.

var POST_USER = 'POST_USER';
var postUser = function(payload) {
    var data = new FormData();
    data.append( "json", JSON.stringify( payload ) );
    return {
        type: POST_USER,
        promise: fetch("/users",
          {method:"POST",
            headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
            },
          body: JSON.stringify(payload)
          }
        )
    };
};
exports.POST_USER = POST_USER;
exports.postUser = postUser;

var GET_USER = 'GET_USER';
var getUser = function(payload) {
    return {
        type: GET_USER,
        promise: fetch("/users",
          {method:"GET",
            headers: {
              'Authorization': 'Basic '+btoa(payload.username+':'+payload.password),
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        ).then(function(res) {
          return res.json();
        })
    };
};
exports.GET_USER = GET_USER;
exports.getUser = getUser;

//Get and Post Survey actions are for presenting the user with a new survey and logging the answers into the DB.

var POST_SURVEY = 'POST_SURVEY';
var payload = {answers:[{question: 1, answers: 5}, {question: 2, answers: 5}, {question: 3, answers: 5}, {question: 4, answers: 5}, {question: 5, answers: ""}]};
var postSurvey = function() {
    var data = new FormData();
    data.append( "json", JSON.stringify( payload ) );
    return {
        type: POST_SURVEY,
        promise: fetch("/addsurvey",
          {method:"POST",
            headers: {
             'Accept': 'application/json',
             'Authorization': 'Basic '+btoa(payload.username+':'+payload.password),
             'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }
        )
    };
};
exports.POST_SURVEY = POST_SURVEY;
exports.postSurvey = postSurvey;

var GET_SURVEY = 'GET_SURVEY';
var getSurvey = function() {
    return {
        type: GET_SURVEY,
        promise: fetch("/surveys",
          {method:"GET",
            headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
            }
          }
        ).then(function(res) {
            return res.json();
        })
    };
};
exports.GET_SURVEY = GET_SURVEY;
exports.getSurvey = getSurvey;
