// use fake heap here for convenience
class FakeMinHeap {

    constructor() {
        this.arr = [];
    }

    get length() {
        return this.arr.length;
    }

    dump() {
        console.log(this.arr);
    }

    load(arr) {
        if (Array.isArray(arr)) {
            arr.sort((a, b) => a - b);
            this.arr = arr;
        }
    }

    push(x) {
        this.arr.push(x);
        this.arr.sort((a, b) => a - b);
    }

    shift() {
        return this.arr.shift();
    }
}

const connectRope = (arr) => {
    if (!arr || !arr.length) return 0;

    let sum = 0;
    let q = new FakeMinHeap();
    q.load(arr);
    while (q.length > 1) {
        let a = q.shift();
        let b = q.shift();
        let c = a + b;
        sum += c;
        q.push(c);
    }

    return sum;
};

let res = connectRope([8, 4, 6, 12]); //58
// let res = connectRope([20, 4, 8, 2]); //54
// let res = connectRope([1, 2, 5, 10, 35, 89]); // 224
// let res = connectRope([2, 2, 3, 3]); //20
console.log(res);
