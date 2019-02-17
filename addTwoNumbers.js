function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  let head = new ListNode(0);
  let cur = head;
  let cur1 = head;
  let cur = head;
  
  let carry = 0;
  while ( l1 || l2 ){
    let out = 0;
      
    if (l1) {
      out += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      out += l2.val;
      l2 = l2.next;
    }

    if (out >= 10){
      out %= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    cur.val = out + carry;
    cur.next = new ListNode(0);
  }

  return head;
};

// [2,4,3]
// [5,6,4]

// [7,0,8]
l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);


l3 = addTwoNumbers(l1, l2);
console.log(l3);
console.log(l3.next);
console.log(l3.next.next);