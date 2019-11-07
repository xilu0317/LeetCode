// 1) topological sort
// indegree = incoming edges
const canFinish1 = (num, preq) => {
    // init
    let graph = Array(num).fill().map(x => [])
    let indegree = Array(num).fill(0)

    // build the graph
    // [0, 1] means '0' depends on '1'
    for (let pair of preq) {
        indegree[pair[0]]++
        // order DOES matter here
        graph[pair[1]].push(pair[0])
    }

    // build the edge container
    let q = []
    for (let i = 0; i < indegree.length; i++) {
        // initialize using nodes with 0 indegree
        if (indegree[i] === 0) q.push(i)
    }

    // similar to BFS
    let count = preq.length
    while (q.length) {
        let n = q.shift()
        for (let c of graph[n]) {
            count--
            if (--indegree[c] === 0) q.push(c)
        }
    }

    return count === 0
}

// 2) brute force method
// num - number of graph
// preq - a list of preprequiste pairs. For example, [0, 1] means course 0 depends on course 1.
const canFinish2 = (num, preq) => {
    // array initialization is needed
    let graph = Array(num).fill().map(x => [])

    // create an array to record visit status
    let visited = Array(num).fill(false)

    // build an ajacendcy-list based graph
    for (let i = 0; i < preq.length; i++) {
        // order doesn't matter
        graph[preq[i][0]].push(preq[i][1])
        // the line below works too
        // graph[preq[i][1]].push(preq[i][0])
    }

    // run cycle detection starting from every node
    for (let i = 0; i < num; i++) {
        if (!dfs(graph, visited, i)) return false
    }

    return true
}

// Recursive dfs
// Definition: no cycle => true && cycle => false
// graph -> graph to traverse
// visited -> external array to keep track of visit status
// course -> course id
const dfs = (graph, visited, course) => {
    // if you are visiting a visted node that means there is a cycle
    if (visited[course]) return false

    // mark as visited
    visited[course] = true

    // visit neigbors and if cycle detected by recursive call return false
    for (let j = 0; j < graph[course].length; j++) {
        if (!dfs(graph, visited, graph[course][j])) return false
    }

    // why?
    visited[course] = false

    // finally if no cycle found, return true
    return true
}
