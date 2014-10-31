/**
 * @jsx React.DOM
 */

var React = require('react');
var types = require('./types');

var CIcon = React.createClass({
  propTypes: {
    icon: React.PropTypes.instanceOf(types.TIcon).isRequired,
    anchor: React.PropTypes.instanceOf(types.TPoint),
  },

  _getStyle: function(anchor) {
    if(!anchor) {
      return {};
    }
    return {
      top: anchor.y,
      left: anchor.x,
    }
  },

  render: function() {
    return (
      <div className="CIcon" style={ this._getStyle(this.props.anchor) }>
        <img src={this.props.icon.src} />
      </div>
    );
  }

});

module.exports = CIcon;