class FakeMinHeap {
	constructor() {
		this.arr = [];
	}

	dump() {
		console.log(this.arr);
	}

	push(x) {
		this.arr.push(x);
		this.arr.sort((a, b) => a - b);
	}

	shift() {
		return this.arr.shift();
	}
}

(() => {
	let mh = new FakeMinHeap();
	mh.push(8);
	mh.push(5);
	mh.shift(); // 5
	mh.push(7);
	mh.push(1);
	mh.shift(); // 1
	mh.push(9);

	mh.dump(); // 7 8 9
})();