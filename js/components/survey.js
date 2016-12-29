var connect = require('react-redux').connect;
import React, { Component } from 'react';
import store from '../store';
import actions from '../actions';
import { Panel, FormGroup, FormControl, Button, Radio, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import {postSurvey} from "../actions";

export class Survey extends Component {
  constructor(props) {
    super(props);
    this.submitAction=this.submitAction.bind(this);
  }
  submitAction(event) {
    event.preventDefault();
    console.log(this.textInput);
    store.dispatch(postSurvey());
  }
  render() {
    console.log(this.props.survey);
    return (
      <div>
        <form id="surveyForm" onSubmit={this.submitAction}>
          <Panel header="Question 1/5: On a scale of 1 (very poor) to 10 (perfect), how did you enjoy your food?">
            <FormGroup ref={(input) => { this.radioQuestion1 = input; }}>
              <Radio inline>1</Radio>
              <Radio inline>2</Radio>
              <Radio inline>3</Radio>
              <Radio inline>4</Radio>
              <Radio inline>5</Radio>
              <Radio inline>6</Radio>
              <Radio inline>7</Radio>
              <Radio inline>8</Radio>
              <Radio inline>9</Radio>
              <Radio inline>10</Radio>
            </FormGroup>
          </Panel>
          <Panel header="Question 2/5: On a scale of 1 to 10, how did you feel about the price of the food?">
          <FormGroup ref={(input) => { this.radioQuestion2 = input; }}>
            <Radio inline>1</Radio>
            <Radio inline>2</Radio>
            <Radio inline>3</Radio>
            <Radio inline>4</Radio>
            <Radio inline>5</Radio>
            <Radio inline>6</Radio>
            <Radio inline>7</Radio>
            <Radio inline>8</Radio>
            <Radio inline>9</Radio>
            <Radio inline>10</Radio>
          </FormGroup>
          </Panel>
          <Panel header="Question 3/5: On a scale of 1 to 10, how was the service you received?">
          <FormGroup ref={(input) => { this.radioQuestion3 = input; }}>
            <Radio inline>1</Radio>
            <Radio inline>2</Radio>
            <Radio inline>3</Radio>
            <Radio inline>4</Radio>
            <Radio inline>5</Radio>
            <Radio inline>6</Radio>
            <Radio inline>7</Radio>
            <Radio inline>8</Radio>
            <Radio inline>9</Radio>
            <Radio inline>10</Radio>
          </FormGroup>
          </Panel>
          <Panel header="Question 4/5: On a scale of 1 to 10, how would you rate the cleanliness of the restaurant?">
          <FormGroup ref={(input) => { this.radioQuestion4 = input; }}>
            <Radio inline>1</Radio>
            <Radio inline>2</Radio>
            <Radio inline>3</Radio>
            <Radio inline>4</Radio>
            <Radio inline>5</Radio>
            <Radio inline>6</Radio>
            <Radio inline>7</Radio>
            <Radio inline>8</Radio>
            <Radio inline>9</Radio>
            <Radio inline>10</Radio>
          </FormGroup>
          </Panel>
          <Panel header="Question 5/5: Please leave us any other comments you'd like us to know about">
            <FormGroup ref={(input) => { this.textInput = input; }} controlId="formControlsTextarea">
              <FormControl componentClass="textarea" placeholder="Please Leave Feedback Here" />
            </FormGroup>
          </Panel>
          <Button id="surveyButton" type="submit">
            Get Reward!
          </Button>
        </form>
      </div>
    );
  }
};

var mapStateToProps = function(state, props) {
    return {
        error: state.error,
        survey: state.survey
    };
};

var Container = connect(mapStateToProps)(Survey);


export default Container;
