// hint: draw a fking diagram

const reverseList = (head) => {
    // If the head is null or the head is the only node there
    if (!head || !head.next) return head;

    let reversedHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return reversedHead;
};