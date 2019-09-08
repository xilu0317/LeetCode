class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// parseInt() is cleaner than Math.floor()
const addTwoNumbers = (l1, l2) => {
    let cur1 = l1, cur2 = l2;

    const dummy = new ListNode(0);
    let cur = dummy;
    let sum = 0;

    while (cur1 || cur2) {
        // account for the carry over from the prev iteration
        sum = parseInt(sum / 10);

        if (cur1) {
            sum += cur1.val;
            cur1 = cur1.next;
        }

        if (cur2) {
            sum += cur2.val;
            cur2 = cur2.next;
        }

        cur.next = new ListNode(sum % 10);
        cur = cur.next;
    }

    // account for when sum is greater than 10 then carry over
    if (parseInt(sum / 10) === 1) {
        cur.next = new ListNode(1);
    }

    return dummy.next;
};

// test case
// [2,4,3]
l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

// [5,6,4]
l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// [7,0,8]
l3 = addTwoNumbers(l1, l2);
console.log(l3);
console.log(l3.next);
console.log(l3.next.next);
