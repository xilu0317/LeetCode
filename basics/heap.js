// parent should be smaller than its children
class MinHeap {

    constructor() {
        this.data = [];
    }

    enqueue(val) {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    }

    dequeue() {
        let min = this.data[0];
        // set first element to last element
        this.data[0] = this.data.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            let parent = Math.floor((index + 1) / 2) - 1;
            if (this.data[parent] > this.data[index]) {
                [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
            }
            index = parent;
        }
    }

    bubbleDown(index) {
        while (true) {
            let child = (index + 1) * 2;
            let sibling = child - 1;
            let toSwap = null;
            if (this.data[index] > this.data[child]) {
                toSwap = child;
            }
            // if sibling is smaller than child, but also smaller than current
            if (this.data[index] > this.data[sibling] && (this.data[child] === null || (this.data[child] !== null && this.data[sibling] < this.data[child]))) {
                toSwap = sibling;
            }
            // if we don't need to swap, then break.
            if (toSwap === null) {
                break;
            }
            [this.data[toSwap], this.data[index]] = [this.data[index], this.data[toSwap]];
            index = toSwap;
        }
    }
}