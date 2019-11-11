class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const generateListNodeFromArray = (arr) => {
    let cur = dummy = new ListNode(Infinity)

    for (let item of arr) {
        dummy.next = new ListNode(item)
        cur = cur.next
    }

    return dummy.next
}

module.exports = generateListNodeFromArray