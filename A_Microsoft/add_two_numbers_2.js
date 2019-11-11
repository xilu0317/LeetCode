// The central idea is to use three stacks
const addTwoNumbers = (l1, l2) => {
    // DO NOT USE 's1 = s2 = []'!!!
    let s1 = [], s2 = []

    while (l1) {
        s1.push(l1.val)
        l1 = l1.next
    }

    while (l2) {
        s2.push(l2.val)
        l2 = l2.next
    }

    // temp stack 's' used for building a reversed linkedlist
    let sum = 0, s = []
    while (s1.length || s2.length) {
        // If it is greater than 10, initialize sum to 1
        sum = parseInt(sum / 10)

        sum += s1.pop() || 0
        sum += s2.pop() || 0

        // only need ones digit
        s.push(sum % 10)
    }
    // add the last '1' if needed
    if (sum >= 10) s.push(1)

    // build the linkedlist using dummy
    let cur = dummy = new ListNode(0)
    while (s.length) {
        cur.next = new ListNode(s.pop())
        cur = cur.next
    }

    return dummy.next
}

// option 2 maybe we can try some pointer manipulation to cut the need for the final stack 's'