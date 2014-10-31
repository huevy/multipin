var t = require('tcomb');


var TPoint = t.struct({
  x: t.Num,
  y: t.Num,
});

var TPointList = t.list(TPoint);

var TIcon = t.struct({
  id: t.Str,
  src: t.Str,
  weight: t.Num,
});

var TIconList = t.list(TIcon);



//-----------------------------

exports.TPoint = TPoint;
exports.TPointList = TPointList;
exports.TIcon = TIcon;
exports.TIconList = TIconList;