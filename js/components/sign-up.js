import {postUser} from "../actions";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Modal, Form, FormGroup, Col, FormControl, Button, Checkbox, ControlLabel } from 'react-bootstrap';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.submitAction = this.submitAction.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  submitAction(event) {
    event.preventDefault();
    let username = ReactDOM.findDOMNode(this.username);
    let name = ReactDOM.findDOMNode(this.name);
    let password = ReactDOM.findDOMNode(this.password);
    var payload = {"name": name.value, "username": username.value, "password": password.value};
    console.log(payload);
    this.props.dispatch(postUser(payload));
  }
  render() {
    return (
      <div className="SignUp">
          <Form horizontal onSubmit={this.submitAction}>

            <FormGroup controlId="formHorizontalName">
              <Col componentClass={ControlLabel} sm={2}>
                Name
              </Col>
              <Col sm={10}>
                <FormControl ref={node => this.name = node} type="name" placeholder="Name" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl ref={node => this.username = node} type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl ref={node => this.password = node} type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign Me Up!
                </Button>
              </Col>
            </FormGroup>
          </Form>
      </div>
    );
  }
};

var mapStateToProps = function(state, props) {
    return {
        error: state.error
    };
};

var Container = connect(mapStateToProps)(SignUp);

export default Container;
