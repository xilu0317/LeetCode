// DO *NOT* use 'let s1 = s2 = []'! It is ok to do it for primitive variables.
// In this case, s1 = s2 will lead to s1 pointing at s2.
// The central idea is to use two stacks
const addTwoNumbers = (l1, l2) => {
    let s1 = [], s2 = [];

    while (l1) {
        s1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        s2.push(l2.val);
        l2 = l2.next;
    }

    let sum = 0;
    // temp stack used for building a reversed linkedlist
    let s = [];
    while (s1.length || s2.length) {
        sum = parseInt(sum / 10);

        let val1 = s1.pop();
        if (val1 !== undefined) {
            sum += val1;
        }

        let val2 = s2.pop();
        if (val2 !== undefined) {
            sum += val2;
        }

        s.push(sum % 10);
    }
    // account for the last one
    if (sum >= 10) s.push(1);

    // build the linkedlist using dummy
    let cur = dummy = new ListNode(0);
    while (s.length) {
        cur.next = new ListNode(s.pop());
        cur = cur.next;
    }

    return dummy.next;
};

// option 2 maybe we can try some pointer manipulation to cut the need for the final stack 's'