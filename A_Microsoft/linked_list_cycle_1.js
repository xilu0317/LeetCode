const hasCycle = (head) => {
    if (!head) return false

    let slow = fast = head

    while (true) {
        // has reached the last node
        if (!fast || !fast.next) return false

        slow = slow.next
        fast = fast.next.next

        if (slow === fast) return true
    }
}
