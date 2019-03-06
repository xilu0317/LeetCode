
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    if (l1 === null && l2 === null) {
      return null;
    }

    if (l1 === null) {
      return l2;
    }

    if (l2 === null) {
      return l1;
    }

    let head = new ListNode(0);
    let cur = head;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
      let res = 0;

      if (l1 !== null) {
        res += l1.val;
        l1 = l1.next;
      }

      if (l2 !== null) {
        res += l2.val;
        l2 = l2.next;
      }

      // order of update matters!
      cur.val += res;

      // I used to use res but it should be cur.val 
      if (cur.val >= 10) {
        cur.val %=10;
        carry = 1;
      }

      if (carry > 0 || l1 !== null || l2 !== null) {
        cur.next = new ListNode(carry);
        cur = cur.next;
        carry = 0;
      }
    }

    return head;
};


// Add two numbers
let l1 = new ListNode(1);

let l2 = new ListNode(9);
l2.next = new ListNode(9);

let shit = addTwoNumbers(l1,l2);
console.log();