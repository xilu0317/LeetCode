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
const mergeTwoListsIterative = (head1, head2) => {
    if (!head1 && !head2) return null;

    let cur1 = head1;
    let cur2 = head2;
    let head = new ListNode(0);
    let cur = head;

    if (head1 && head2) {
        if (head1.val < head2.val) {
            head.val = head1.val;
            cur1 = cur1.next;
        } else {
            head.val = head2.val;
            cur2 = cur2.next;
        }
    } else {
        if (!head2) {
            head.val = head1.val;
            cur1 = cur1.next;
        }

        if (!head1) {
            head.val = head2.val;
            cur2 = cur2.next;
        }
    }

    while (cur1 && cur2) {
        if (cur1.val < cur2.val) {
            cur.next = new ListNode(cur1.val);
            cur1 = cur1.next;
        } else {
            cur.next = new ListNode(cur2.val);
            cur2 = cur2.next;
        }
        cur = cur.next;
    }

    while (cur1) {
        cur.next = new ListNode(cur1.val);
        cur1 = cur1.next;
        cur = cur.next;
    }

    while (cur2) {
        cur.next = new ListNode(cur2.val);
        cur2 = cur2.next;
        cur = cur.next;
    }

    return head;
};

const mergeTwoLists = (head1, head2) => { 
	if (head1 === null) return head2;
	if (head2 === null) return head1;

	if (head1.val < head2.val) {
		head1.next = mergeTwoLists(head1.next, head2);
		return head1;
	} else {
		head2.next = mergeTwoLists(head1, head2.next);
		return head2;
	}
}

let head1 = stuff([1]);
let head2 = stuff([2]);
let head = mergeTwoLists(head1, head2);
console.log(head);