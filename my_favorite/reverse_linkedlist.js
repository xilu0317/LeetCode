// hint: draw a fking diagram

const reverseList = (head) => {
	if (!head || !head.next) return head;

	let reversedHead = reverseList(head.next);
	head.next.next = head;
	head.next = null;

	return reversedHead;
};