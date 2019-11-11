// BFS full tree
const domTreeTraversalBFS = (root = document.getRootNode()) => {
    const q = [root], list = []

    while (q.length) {
        let node = q.shift()

        list.push(node)

        for (let x of node.children) {
            q.push(x)
        }
    }

    return list
}

// DFS full tree, iterative
function domTreeTraversalDFS(root = document.getRootNode()) {
    let stack = [root], nodeList = []

    while (stack.length) {
        let node = stack.pop()

        nodeList.push(node)

        for (let x of node.children) {
            stack.push(x)
        }
    }

    return nodeList
}

// DFS full tree, recursive
function _domTreeTraversalDFSRecursive(root, nodeList) {
    if (!root) return

    nodeList.push(root)

    for (let child of root.children) {
        _domTreeTraversalDFSRecursive(child, nodeList)
    }
}

function domTreeTraversalDFSRecursive(root = document.getRootNode()) {
    let nodeList = []
    _domTreeTraversalDFSRecursive(root, nodeList)
    return nodeList
}

// get 'class name' by BFS
// default param should be the last param
// Point of entry is set to body to avoid irrelevant nodes
function getMyClassBFS(className, root = document.body) {
    let q = [root]
    let res = []

    while (q.length) {
        let node = q.shift()

        // If the className is a match, add it to the result list
        if (node.classList.contains(className))
            res.push(node)

        for (const c of node.children) {
            q.push(c)
        }
    }

    return res
}

// get 'class name' by DFS
// default param should be the last param
function getMyClassDFS(className, root = document.body) {
    let stack = [root]
    let classList = []

    while (stack.length) {
        let node = stack.pop()

        if (node.classList.contains(className))
            classList.push(node)

        for (let child of node.children) {
            stack.push(child)
        }
    }

    return classList
}

// The idea is to go from the 'leaf' back up to the root
// We only consider nodes that are 'prefiltered' by the BFS/DFS traversal
// If the path contains every elements then increment the counter

function getClassNameByHier(hierName) {
    let hierList = hierName
        .split(/>/)
        .reverse()
    let lastClassName = hierList[0]

    let classNameArr = getMyClassBFS(lastClassName)
    let classNamesRes = []

    for (let nodeWithClass of classNameArr) {
        let i = 1
        let node = nodeWithClass
        while (node.parentNode) {

            // if contains hier increment count
            if (node.classList.contains(hierList[i]))
                i++

            if (i === hierList.length)
                classNamesRes.push(nodeWithClass)

            node = node.parentNode
        }
    }

    return [...new Set(classNamesRes)]
}

// Beautiful ES6 syntax! I love it!
const bfs = (className, root = document.body) => {
    if (!className) return null

    let q = [root], res = []

    while (q.length) {
        let node = q.shift()

        if (node.classList.contains(className))
            res.push(node)

        for (let child of node.children) {
            q.push(child)
        }
    }

    return res
}

const getHier = (hierString) => {
    if (!hierString) return null

    let hierList = hierString.split(/>/)
        .reverse()

    let lastClassName = hierList[0]
    let nodeClassList = bfs(lastClassName)
    let res = []

    for (let nodeClass of nodeClassList) {
        let node = nodeClass, i = 1

        while (node) {
            if (node.classList.contains(hierList[i]))
                i++

            if (i === hierList.length) {
                res.push(nodeClass)
                break // this break is important
            }

            node = node.parentNode
        }
    }

    return res
}
