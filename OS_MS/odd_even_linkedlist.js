const oddEvenList = (head) => {
    if (head) {

        let odd = head;
        let even = head.next;
        // record the head here
        let evenHead = even;

        while (even && even.next) {
            odd.next = odd.next.next;
            even.next = even.next.next;
            odd = odd.next;
            even = even.next;
        }

        odd.next = evenHead;
    }

    return head;
};