import {POST_SURVEY} from "./actions";
import { handle } from 'redux-pack';

var initialState = {
  type: null,
  searchText: null,
  };

var SurpayApp = function(state, action) {
    state = state || initialState;
    const { type, payload } = action;
    switch (type) {
    case POST_SURVEY:
      return handle(state, action, {
        start: s => ({
          ...s,
          isLoading: true,
          surveyError: null
        }),
        finish: s => ({ ...s, isLoading: false }),
        failure: s => ({ ...s, surveyError: payload }),
        success: s => ({ ...s, survey: payload }),
      });
    default:
      return state;
  }
};


exports.SurpayApp = SurpayApp;
