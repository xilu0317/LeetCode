// 1) make sure the relative path is correct
// 2) the browser javascript keyword `import` just doesn't work
const stuff = require('./basics/singly_linkedlist');

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (head1, head2) => {
    // Note `dummy` is just an auxiliary placeholder
    let dummy = new ListNode(Number.MAX_SAFE_INTEGER);
    let cur = dummy;

    while (head1 && head2) {
        if (head1.val < head2.val) {
            cur.next = head1;
            head1 = head1.next;
        } else {
            cur.next = head2;
            head2 = head2.next;
        }
        cur = cur.next;
    }

    // Handle the leftover linked list
    cur.next = head1 ? head1 : head2;

    // Note it is *not* returning `dummy` but `dummy.next`
    return dummy.next;
};

const mergeTwoLists = (head1, head2) => {
    if (!head1) return head2;
    if (!head2) return head1;

    if (head1.val < head2.val) {
        head1.next = mergeTwoLists(head1.next, head2);
        return head1;
    } else {
        head2.next = mergeTwoLists(head1, head2.next);
        return head2;
    }
};

// [Test case]
let head1 = stuff([1]);
let head2 = stuff([2]);
let head = mergeTwoLists(head1, head2);
console.log(head);
