// This is the most straightforward solution
// Other solutions are too hard to understand
const flatten = (root) => {
    if (!root) return

    let oldLeft = root.left
    let oldRight = root.right

    root.left = null

    flatten(oldLeft)
    flatten(oldRight)

    // grafting the old left to the right
    root.right = oldLeft

    let cur = root
    while (cur.right) {
        cur = cur.right
    }

    // grafting the old right to the right
    cur.right = oldRight
}
