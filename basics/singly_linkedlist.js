class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const generateListNodeFromArray = (arr) => {
    let cur = head = new ListNode(0);

    for (let i = 0; i < arr.length; i++) {
        cur.val = arr[i];

        if (i < arr.length - 1) {
            cur.next = new ListNode(0);
        }

        cur = cur.next;
    }

    return head;
};

module.exports = generateListNodeFromArray;