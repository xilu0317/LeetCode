
const subsets = (nums) => {

  let res = [];
  res.push([]);

  for (let i = 0; i < nums.length; ++i) {

    let len = res.length;

    for (let j = 0; j < len; ++j) {
      res.push([...res[j]]);
    }

    for (let j = 0; j < len; ++j) {
      res[j].push(nums[i]);
    }

    //res = oldArr.concat(res);
  }

  return res;

}

let s = subsets([1,2,3]);
console.log(s);