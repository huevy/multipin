var pack = require('./pack');

console.time('pack');
var points1 = pack(9, 2);
console.timeEnd('pack');

// console.time('pack2');
// var points2 = pack(9, 2);
// console.timeEnd('pack2');

console.log(points1);
// console.log(points2);