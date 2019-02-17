function UndirectedGraphNode(label) {
  this.label = label;  // label
  this.neighbors = []; // a list of neighbors
}

let cloneGraph = function(graph) {
  let visited = {};
  
  if(graph === null){
    return graph;
  } else {
    return dfs(graph);
  }

  function dfs(node){
    let newNode = visited[node.label] ? visited[node.label] : new UndirectedGraphNode(node.label);
    visited[node.label] = newNode;

    for (let i = 0; i < node.neighbors.length; i++) {
      let newNeighbor = visited[node.neighbors[i].label] ? visited[node.neighbors[i].label] : dfs(node.neighbors[i]);
      newNode.neighbors.push(newNeighbor);
    }

    return newNode;
  }
};


