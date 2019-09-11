const addTwoNumbers = (l1, l2) => {
    let cur1 = l1, cur2 = l2;
    let cur = dummy = new ListNode(0);
    let sum = 0;

    while (cur1 || cur2) {
        // KEY
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

    // account for the last '1'
    if (sum >= 10) {
        cur.next = new ListNode(1);
    }

    return dummy.next;
};
