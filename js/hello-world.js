var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');

var HelloWorld = React.createClass({
  buttonPress: function() {
    this.props.dispatch(actions.buttonPress());
  },
  render: function() {
    let message;
    if (this.props.showMessage == true) {
      message = <h1>hello world</h1>
    }
    return (
      <div className="HelloWorld">
        <button type="submit" onClick={this.buttonPress}>Click here!</button>
        <div id="helloDiv">
          {message}
        </div>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        showMessage: state.showMessage
    };
};

var Container = connect(mapStateToProps)(HelloWorld);

module.exports = Container;
module.exports.HelloWorld = HelloWorld;
