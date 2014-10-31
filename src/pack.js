var _ = require('lodash');
var t = require('tcomb');
var types = require('./types');
var TPointList = types.TPointList;
var TPoint = types.TPoint;

var pack = t
  .func([t.Num, t.Num], t.Any)
  .of(
    function pack(number, scale) {
      var side = Math.round(Math.sqrt(number));
      var halfSide = side / 2;
      var x = -halfSide;
      var y = -halfSide;

      var points = [];

      var scaledEnd = scale * side - halfSide;
      var scaledStep = scale;

      var pointsLeft = number;
      while (pointsLeft--) {
        if (x >= scaledEnd) {
          x = -halfSide;
          y += scaledStep;
        }

        points.push(new TPoint({
          x: x,
          y: y,
        }));

        x += scaledStep;
      }

      return points;
    }

  );

var memoResolver = function(number, scale) {
  return '' + number + ',' + scale;
}

var memoPack = _.memoize(pack, memoResolver);

module.exports = memoPack;