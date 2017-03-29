import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import moment from 'moment';



export class SurveyItem extends Component {
  render() {
    let formattedDate = moment(this.props.date).format('ll');
    return (
      <div className="SurveyItem">
        <Jumbotron>
          <div className='container'>
            <h4>{this.props.name}</h4>
            <h4>{this.props.address}</h4>
            <h4>{formattedDate}</h4>
            <p>This restaurant is not currently offering any discounts through SurPay.</p>

          </div>
        </Jumbotron>
      </div>
    )
  };
}

var mapStateToProps = function(state, props) {
    return {
        error: state.error
    };
};

var Container = connect(mapStateToProps)(SurveyItem);

export default Container;
