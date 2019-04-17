/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 1 ->    2 <- 3 <- rest
// h

const reverse = (head) => {
  if (!head) return null;

  if (!head.next) return head;

  let rest = reverse(head.next);

  head.next = head;

  return rest;
}
var isPalindrome = function(head) {
  if (!head) return null;
  
  let slow = fast = head;

  while (fast || fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let mid = slow;
  let head2 = reverse(mid);

  for (let node = head; node; node = node.next) {
    if (head.val !== head2.val) return false
  }

  return true;
};