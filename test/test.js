var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var HelloWorld = require('../js/hello-world').HelloWorld;
describe('hello world component', function() {
  it('Renders the button and hello world text', function () {

    var renderer = TestUtils.createRenderer();
    renderer.render(<HelloWorld />);
    var result = renderer.getRenderOutput();
        result.props.className.should.equal('HelloWorld');
  });
});
