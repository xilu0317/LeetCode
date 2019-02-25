/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  
  var out = [];

  for (let i = 0; i < T.length; i++) {
    var count = 0;
    for (let j = i+1; j < T.length; j++) {
      if (T[i] < T[j]) {
        count++;
        break;
      } else {
        count++;
      }

      if (j == T.length -1) {
        count = 0;
      }
    }
    out.push(count);
  }
  return out;
};