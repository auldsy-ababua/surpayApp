import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

export class SurveyItem extends Component {
  constructor(props) {
    super(props);
    render() {
      return (
        <div className="SurveyItem">

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

var Container = connect(mapStateToProps)(SurveyItem);

export default Container;
