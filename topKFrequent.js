const buildDict = (words) => {
  const dict = {};
  for (let word of words) {
    if (!dict[word]) {
      dict[word] = 1;
    } else {
      dict[word]++;
    }
  }
  return dict;
}

// This is the most important part!
const twoRowComparator = (a,b) => {
  // descending order
  if (b[1]>a[1]) return 1;
  if (a[1]>b[1]) return -1;
  // intentionally leaving out the case when a[1] === b[1]

  // ascending order
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  if (a[0] === b[0]) return 0;
}

var topKFrequent = function(words, k) {
  if (words === null || k <= 0 ) throw 'Illegal argument exception!';

  const dict = buildDict(words);

  let outArr = Object.entries(dict)
                     .sort(twoRowComparator)
                     .map(x => x[0]);

  outArr.length = k;

  return outArr;
};


var res= topKFrequent([ "a", "z", "d", "b", "b", "b", "d", "z", "z"],4);
console.log(res);
