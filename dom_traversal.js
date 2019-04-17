// dom traversal
function getMyClass(className) {
  let root = document.body;
  let q = [root];
  let classList = [];

  while (q.length) {
    let node = q.shift();

    if (node.classList.contains(className)) {
      classList.push(node);
    }

    for (let child of node.childNodes) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        q.push(child);
      }
    }
  }

  return classList;
}

// hierachy [INCOMPELTE]
function getMyClass(className) {
  let root = document.body;
  let q = [root];
  let classList = [];

  while (q.length) {
    let node = q.shift();

    if (node.classList.contains(className)) {
      classList.push(node);
    }

    for (let child of node.childNodes) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        q.push(child);
      }
    }
  }

  return classList;
}

// general dom traversal 
let body = document.body.;
function domWalk(root) {
  if (!root) return null;

  let q = [root];
  
  while (q.length)  {
    let node = q.shift();
    console.log(node);

    for (let child of node.childNodes) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        q.push(child);
      }
    }
  }
}



