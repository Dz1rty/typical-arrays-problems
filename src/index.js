
exports.min = function min (array) {
  if (array === undefined || array.length == 0 ) {
    return 0;
  } else {
     return Math.min(...array);
 }
}

exports.max = function max (array) {
  if (array === undefined || array.length == 0 ) {
    return 0;
  } else {
     return Math.max(...array);
 }
}

exports.avg = function avg (args) {
  if (args && args.length !== 0)  {
    let sum = 0;
    for (let i = 0 ; i<args.length ; i++) {
        sum += args[i];
    }
    let avg = sum / args.length;
    return Number(avg);
  } else {
    return 0;
  } 

}
