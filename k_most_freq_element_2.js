const buildDict = (nums) => {
  const dict = {};
  for(let value of nums) {
    if (!dict[value]) {
      dict[value]=1;
    } else {
      dict[value]++;
    }
  }
  return dict;
}

const topKFrequent = (nums, k) => {
  if (nums === null || k <= 0) throw 'Illegal argument exception!';

  const dict = buildDict(nums);
  let arrKey = Object.entries(dict)
                     .sort((a,b)=>b[1]>a[1])
                     .map(x => x[0]);
  arrKey.length = k;

  return arrKey;
}

console.log(topKFrequent([6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0],6));
