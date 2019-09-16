const detectCycle = (head) => {
    if (!head || !head.next) return null;

    let slow = fast = entry = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            while (slow !== entry) {
                slow = slow.next;
                entry = entry.next;
            }

            return entry;
        }
    }

    return null;
};
