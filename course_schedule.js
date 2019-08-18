const dfs = (graph, visited, course) => {
    if (visited[course]) {
        return false;
    } else {
        visited[course] = true;
    }

    for (let i = 0; i < graph[course].length; i++) {
        if (!dfs(graph, visited, graph[course][i])) {
            return false;
        }
    }
    visited[course] = false;

    return true;
};

const canFinish = (num, preq) => {
    let graph = Array(num).fill();

    for (let i = 0; i < num; i++) {
        graph[i] = [];
    }

    visited = Array(num).fill(false);
    for (let i = 0; i < preq.length; i++) {
        graph[preq[i][1]].push(preq[i][0]);
    }

    for (let i = 0; i < num; i++) {
        if (!dfs(graph, visited, i)) {
            return false;
        }
    }

    return true;
};

