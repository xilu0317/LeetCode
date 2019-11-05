// Again, to fully comprehend traversal it is easier to assoicate the 'pictoral' version of the algorithm
// Imaging trying to traverse all the nodes in a forest
// You hold a note book called 'stack' and use the notebook to record the current position
// Each time in the while loop, you 'check your notebook' to refer to the latest last position 
// Because of the 'reverse' nature of stack, you push right first then left so that when retreving them, you will get the left first

// key techniques: stack keeps not only the node but also the path

// Stack approach
const binaryTreePaths = (root) => {
    if (!root) return []

    let stack = [[root, '']], res = []

    while (stack.length) {
        let [node, total] = stack.pop()

        if (!node.left && !node.right)
            res.push(total + node.val)

        if (node.right)
            stack.push([node.right, total + node.val + '->'])

        if (node.left)
            stack.push([node.left, total + node.val + '->'])
    }

    return res
}
