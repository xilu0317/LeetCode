// BFS full tree
function domTreeTraversalBFS(root = document.getRootNode()) {
  let q = [root];
  let nodeList = [];

  while (q.length) {
    let node = q.shift();

    nodeList.push(node);

    for (let child of node.children) {
        q.push(child);
    }
  }

  return nodeList;
}

// DFS full tree, iterative
function domTreeTraversalDFS(root = document.getRootNode()) {
  let stack = [root];
  let nodeList = [];

  while (stack.length) {
    let node = stack.pop();

    nodeList.push(node);

    for (let child of node.children) {
      stack.push(child);
    }
  }

  return nodeList;
}

// DFS full tree, recursive
function _domTreeTraversalDFSRecursive(root, nodeList) {
  if (!root) return;

  nodeList.push(root);

  for (let child of root.children) {
    _domTreeTraversalDFSRecursive(child, nodeList);
  }
}

function domTreeTraversalDFSRecursive(root = document.getRootNode()) {
  let nodeList = [];
  _domTreeTraversalDFSRecursive(root, nodeList);
  return nodeList;
}

// get `class name` by BFS
// default param should be the last param
function getMyClassBFS(className, root = document.body) {
  let q = [root];
  let classList = [];

  while (q.length) {
    let node = q.shift();

    if (node.classList.contains(className)) {
      classList.push(node);
    }

    for (let child of node.children) {
        q.push(child);
    }
  }

  return classList;
}

// get `class name` by DFS
// default param should be the last param
function getMyClassDFS(className, root = document.body) {
  let stack = [root];
  let classList = [];

  while (stack.length) {
    let node = stack.pop();

    if (node.classList.contains(className)) {
      classList.push(node);
    }

    for (let child of node.children) {
      stack.push(child);
    }
  }

  return classList;
}

function getClassNameByHier(hierName) {
  let hierArr = hierName.split(/>/).reverse();
  let lastClassName = hierArr[0];

  let classNameArr = getMyClassBFS(lastClassName);
  let classNamesRes = [];

  for (let nodeWithClass of classNameArr) {
    let i = 1;
    let node = nodeWithClass;
    while (node.parentNode) {
      
      // contains
      if (node.classList.contains(hierArr[i])) {
        i++;
      }

      if (i === hierArr.length) {
        classNamesRes.push(nodeWithClass);
      }
      
      node = node.parentNode;
    }
  }

  return [...new Set(classNamesRes)];
}
