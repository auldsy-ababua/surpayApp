import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

export class SurveyList extends Component {
  constructor(props) {
    super(props);
    render() {
      return (
        <div className="SurveyList">

        </div>
      )
    };
  }
}

var mapStateToProps = function(state, props) {
    return {
        error: state.error
    };
};

var Container = connect(mapStateToProps)(SurveyList);

export default Container;
