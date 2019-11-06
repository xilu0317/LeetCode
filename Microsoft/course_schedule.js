// TODO: topo sort method still wrong
// topological sort method

// public boolean canFinish(int numCourses, int[][] prerequisites){
//     int[] incomingEdges = new int[numCourses];
//     List < Integer > [] goCourses = new List[numCourses];
//     for (int i = 0; i < goCourses.length; i++) {
//         goCourses[i] = new LinkedList<Integer>();
//     }
//     for (int[] pair: prerequisites) {
//         incomingEdges[pair[0]]++;
//         goCourses[pair[1]].add(pair[0]);
//     }
//     Queue < Integer > queue = new LinkedList<Integer>();
//     for (int i = 0; i < incomingEdges.length; i++) {
//         if (incomingEdges[i] == 0) {
//             queue.add(i);
//         }
//     }
//     int edgeCnt = prerequisites.length;
//     while (!queue.isEmpty()) {
//         int cur = queue.poll();
//         for (int goCrs: goCourses[cur]) {
//             edgeCnt--;
//             if (--incomingEdges[goCrs] == 0)
//                 queue.add(goCrs);
//         }
//     }
//     return edgeCnt == 0;
// }

const canFinish = (num, preq) => {
    let incomingEdges = Array(num)
    let courses = Array(num).fill().map(() => [])
    for (let pair of preq) {
        incomingEdges[pair[0]]++
        courses[pair[1]].push(pair[0])
    }
    let q = []
    for (let i = 0; i < incomingEdges.length; i++) {
        if (incomingEdges[i] === 0) q.push(i)
    }

    let count = preq.length
    while (q.length) {
        let node = q.shift()
        for (let c of courses[node]) {
            count--
            if (--incomingEdges[c] === 0) q.push(c)
        }
    }

    return count === 0
}

// brute force method
const canFinish = (num, preq) => {
    // array initialization is needed
    let graph = Array(num).fill().map(() => [])
    // create an array to record visit status
    let visited = Array(num).fill(false)

    // build graph
    for (let i = 0; i < preq.length; i++) {
        graph[preq[i][1]].push(preq[i][0])
    }

    // run cycle detection starting from every node
    for (let i = 0; i < num; i++) {
        if (!dfs(graph, visited, i)) return false
    }

    return true
}

// acyclic => true
const dfs = (graph, visited, course) => {
    if (visited[course]) return false

    // mark as visited
    visited[course] = true

    // visit neigbors and if cycle detected by recursive call return false
    for (let j = 0; j < graph[course].length; j++) {
        if (!dfs(graph, visited, graph[course][j])) return false
    }

    // erase the mark when done
    visited[course] = false

    return true
}
