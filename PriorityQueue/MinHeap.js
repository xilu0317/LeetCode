// Implement inter based min heap
class MinHeap {

    constructor() {
        this.arr = [];

    }

    dump() {
        return this.arr;
    }

    push(x) {
        this.arr.push(x);
        this.bubbleUp(this.arr.length - 1);
    }

    shift() {
        let val = this.arr[0];
    }

    bubbleUp(i) {

    }

    bubbleDown(i) {

    }

    getParentIndex(i) {

    }

    getChildIndex(i) {

    }
}



