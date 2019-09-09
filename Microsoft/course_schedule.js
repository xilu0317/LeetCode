// TODO: WRONG SOLUTION // REFER TO THE PYTHON SOLUTION
const visited = new Set();

const dfsCycleDeteced = (graph, course) => {
    // If the course has already been visited
    if (visited.has(course)) {
        return true;
    }
    visited.add(course);

    // 'i' is the index for the neightbor
    for (let i = 0; i < graph[course].length; i++) {
        if (dfsCycleDeteced(graph, graph[course][i])) {
            return true;
        }
    }

    return false;
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// Brute force
const canFinish = (numCourses, preq) => {
    // build the graph using 'preq'
    let graph = Array(numCourses).fill().map(() => []);
    for (let i = 0; i < preq.length; i++) {
        graph[preq[i][1]].push(preq[i][0]);
    }

    // Use each node as a starting point to see if the course can be finished
    // A cycle in the graph would mean the course cannot be finished because of the circular dependency
    for (let node = 0; node < numCourses; node++) {
        if (dfsCycleDeteced(graph, node)) {
            return false;
        }
    }

    return true;
};
