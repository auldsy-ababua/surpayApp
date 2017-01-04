import {POST_SURVEY, POST_USER, GET_USER, GET_SURVEY} from "./actions";
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
      case POST_USER:
        return handle(state, action, {
          start: s => ({
            ...s,
            isLoading: true,
            surveyError: null
          }),
          finish: s => ({ ...s, isLoading: false }),
          failure: s => ({ ...s, userError: payload }),
          success: s => ({ ...s, user: payload }),
        });
      case GET_USER:
        console.log(action);
        return handle(state, action, {
          start: s => ({
            ...s,
            isLoading: true,
            surveyError: null
          }),
          finish: s => ({ ...s, isLoading: false }),
          failure: s => ({ ...s, userError: payload }),
          success: s => ({ ...s, user: payload }),
        });
      case GET_SURVEY:
        console.log(action);
        return handle(state, action, {
          start: s => ({
            ...s,
            isLoading: true,
            surveyError: null
          }),
          finish: s => ({ ...s, isLoading: false }),
          failure: s => ({ ...s, userError: payload }),
          success: s => ({ ...s, user: payload }),
        });
    default:
        return state;
  }
};


exports.SurpayApp = SurpayApp;
