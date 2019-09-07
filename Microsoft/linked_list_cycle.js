const hasCycle = (head) => {
	if (!head) return false;

	let slow = fast = head;

	while (true) {
		if (!fast || !fast.next) return false;

		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) return true;
	}
};