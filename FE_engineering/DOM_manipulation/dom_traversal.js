// BFS full tree
function domTreeTraversalBFS(root = document.getRootNode()) {
    let q = [root], list = []

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
    let stack = [root], list = []

    while (stack.length) {
        let node = stack.pop()

        list.push(node)

        for (let x of node.children) {
            stack.push(x)
        }
    }

    return list
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
function getMyClassBFS(className, root = document.body) {
    let q = [root], classList = []

    while (q.length) {
        let node = q.shift()

        if (node.classList.contains(className))
            classList.push(node)

        for (let x of node.children) {
            q.push(x)
        }
    }

    return classList
}

// get 'class name' by DFS
// default param should be the last param
function getMyClassDFS(className, root = document.body) {
    let stack = [root], classList = []

    while (stack.length) {
        let node = stack.pop()

        if (node.classList.contains(className))
            classList.push(node)

        for (let x of node.children) {
            stack.push(x)
        }
    }

    return classList
}

// Find the class hierachy
// Method 1:
// bottom up method: go from the leaf/node and home it back to root
// if c b a are found before root, keep the d node, otherwise ignore it
let hierachy = 'a>b>c>d'

function getClassNameByHier(hierName) {
    let hierArr = hierName.split(/>/).reverse()
    let lastClassName = hierArr[0]

    let classNameArr = getMyClassBFS(lastClassName)
    let classNamesRes = []

    let node = null
    let i = 1
    for (let classNode of classNameArr) {
        while (classNode.parentNode !== document.body && i < hierArr.length) {
            node = classNode.parentNode
            if (node.contains(hierArr[i])) {
                i++
                node = node.parentNode
            }

            if (i === hierArr.length)
                classNamesRes.push(classNode)
        }
    }

    return classNamesRes
}