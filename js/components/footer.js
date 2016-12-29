var React = require('react');
var connect = require('react-redux').connect;
var store = require('../store');
var actions = require('../actions');


var Footer = React.createClass({
  render: function() {
    return (
      <div className="Footer">
        <footer className="footer">
          <div className="container text-center">
            <a href="https://github.com/auldsy-ababua"><i className="fa fa-github"></i></a>
            <a href="mailto:caulds989@gmail.com?Subject=Just%20viewed%20Surpay"><i className="fa fa-at"></i></a>
            <a href="https://plus.google.com/u/0/101893123188561927210/posts"><i className="fa fa-google-plus"></i></a>
            <a href="skype:caulds989?call"><i className="fa fa-skype"></i></a>
          </div>
        </footer>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        error: state.error
    };
};

var Container = connect(mapStateToProps)(Footer);

module.exports = Container;
module.exports.Footer = Footer;
