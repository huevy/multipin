/**
 * @jsx React.DOM
 */

var React = require('react');

var CMultipin = require('./CMultipin.jsx');
var types = require('./types');


var App = React.createClass({
  getInitialState: function() {

    return {
      icons: types.TIconList([{
        id: 'a',
        src: '/i/1.jpeg',
        weight: 0,
      }, {
        id: 'b',
        src: '/i/2.jpeg',
        weight: 0,
      }, {
        id: 'c',
        src: '/i/3.jpeg',
        weight: 4,
      }, {
        id: 'd',
        src: '/i/4.png',
        weight: 0,
      }, {
        id: 'd',
        src: '/i/5.jpeg',
        weight: 0,
      },

      ]),
    };
  },

	render: function() {
		return (
      <CMultipin icons={this.state.icons} iconSize={10} />
    );
	}

});

module.exports = App;