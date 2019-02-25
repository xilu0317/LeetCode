var isValid = function(s) {
  let stack = [];
  let dict ={};

  dict['{'] ='}';
  dict['['] =']';
  dict['('] =')';
  let arr = Array.from(s);
  
  for (let myChar of arr){
    if ( myChar === '{' || myChar === '[' || myChar === '('){
      stack.push(myChar);
    } else {
      if (myChar !== dict[stack[stack.length - 1]]){
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
};