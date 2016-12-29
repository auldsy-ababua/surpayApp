var $ = require("jquery");
var fetch = require('isomorphic-fetch');
import OAuthSimple from 'oauthsimple';

var consumerKey = '2ycjVcXfdZOJ1WLCzf19iQ';
var consumerSecret = 'gpLvAC71QtQJVbxK-Eq_yXykkqg';
var token = '8uu9MvVHdkv-TE3Im88DXsrRMzzvk2kB';
var tokenSecret = 'lmLosFTHQ5lK1qmGZnn6px6nv64';

var POST_SURVEY = 'POST_SURVEY';
var payload = {answers:[{question: 1, answers: 5}, {question: 2, answers: 5}, {question: 3, answers: 5}, {question: 4, answers: 5}, {question: 5, answers: ""}]};
var postSurvey = function() {
    var data = new FormData();
    data.append( "json", JSON.stringify( payload ) );
    return {
        type: POST_SURVEY,
        promise: fetch("/addsurvey", {method:"POST",
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
        })
    };
};
exports.POST_SURVEY = POST_SURVEY;
exports.postSurvey = postSurvey;
