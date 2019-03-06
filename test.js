/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let arrOfDict = Array(A.length).fill().map(() => new Object());

  for(let i = 0; i < A.length; i++) {
    let curDic = arrOfDict[i];
    let word = A[i];
    for (let j = 0; j < word.length; j++) {
      if (!curDic[word[j]]) {
        curDic[word[j]] = 1;
      } else {
        curDic[word[j]]++;
      }
    }
  }

  let res = arrOfDict.reduce((acc,cur) =>dictSubtraction(acc,cur) ,arrOfDict[0]);

  let outputArr = [];
  for (let key in res) {
    outputArr = outputArr.concat(Array(res[key]).fill(key));
  }

  

  return outputArr;
};

var dictSubtraction = (dict1, dict2) => {
  if (dict1 === null || Object.keys(dict1).length === 0) {
    return {};
  }

  if (dict2 === null || Object.keys(dict2).length === 0) {
    return {};
  }

  for (let key in dict1) {
    if (dict2[key]) {
      dict1[key] = Math.min(dict1[key],dict2[key]);
      if (dict1[key] === 0) {
        delete dict1[key];
      }
    } else {
      delete dict1[key];
    }
  }

  return dict1;
}
