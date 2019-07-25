/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const oddEvenList = (head) => {
    if (!head) return null;

    let head2 = head.next;
    let cur1 = head;
    let cur2 = head2;

    while (cur1 && cur2) {
        if (cur2) {
            cur1.next = cur2.next;
            if (cur1.next) {
                cur1 = cur1.next;
            }

        }
        if (cur1) {
            cur2.next = cur1.next;
            cur2 = cur2.next;
        }
    }

    cur1.next = head2;

    return head;
};