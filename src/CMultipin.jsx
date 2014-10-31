/**
 * @jsx React.DOM
 */

var _ = require('lodash');
var React = require('react');
var types = require('./types');
var CIcon = require('./CIcon.jsx');
var pack = require('./pack');

var CMultipin = React.createClass({

  getInitialState: function() {
    return {
      expanded: false, 
    };
  },

  propTypes: {
    icons: React.PropTypes.instanceOf(types.TIconList).isRequired,
    iconSize: React.PropTypes.number.isRequired,
  },

  _getMainIcon: function(icons) {
    return _(icons).sortBy('weight').last();
  },

  _expand: function () {
    this.setState({
      expanded: true,
    });
  },

  _collapse: function () {
    this.setState({
      expanded: false,
    });
  },

  _renderIcons: function (icons, size) {
    var anchorPoints = pack(icons.length, size);

    return _(icons)
      .sortBy('weight')
      .map(function(it, i) {
        return this._renderIcon(it, anchorPoints[i]);
      }, this)
      .value();
  },

  _renderMainIcon: function (icons) {
    return this._renderIcon(this._getMainIcon(icons));
  },

  _renderIcon: function (icon, anchorPoint) {
    return (<CIcon icon={icon} anchor={anchorPoint} />);
  },

  _onClick: function () {
    if(!this.state.expanded) {
      this._expand();
    }
  },

  render: function() {
    return (
      <div className="CMultipin" onClick={ this._onClick }>
        { 
          this.state.expanded ?
            this._renderIcons(this.props.icons, this.props.iconSize)
            : this._renderMainIcon(this.props.icons)
        }
      </div>
    );
  }
});

module.exports = CMultipin;