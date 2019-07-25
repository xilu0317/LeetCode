class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var addTwoNumbers = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    let head = new ListNode(0);
    let cur = head;
    let carry = 0;

    while (l1 || l2) {
        let res = 0;

        if (l1) {
            res += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            res += l2.val;
            l2 = l2.next;
        }

        if (res >= 10) {
            res %= 10;
            carry = 1;
        } else {
            carry = 0;
        }

        cur.val = res + carry;
        cur.next = new ListNode(0);
    }

    return head;
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