class PriorityQueue {
    constructor() {
        this.data = [null];
    }

    enqueue(node) {
        this.data.push(node);
        if (this.data.length === 2) {
            return;
        } else {
            this._bubbleUp(this.data.length - 1);
        }
    }

    dequeue(node) {
        const nodeIndex = this.data.indexOf(node);
        if (nodeIndex === -1) {
            return false;
        } else if (nodeIndex === this.data.length - 1) {
            this.data.pop();
        } else {
            this._swap(this.data.length - 1, nodeIndex);
            this.data.pop();
            const parentIndex = parseInt(nodeIndex / 2);
            if (this.data[parentIndex] && this.data[parentIndex].h < this.data[nodeIndex].h) {
                this._bubbleUp(nodeIndex);
            } else {
                this._bubbleDown(nodeIndex);
            }
        }
    }

    getMaxHeight() {
        if (this.data.length === 1) {
            return 0;
        } else {
            return this.data[1].h;
        }
    }

    _swap(i, j) {
        // ES6 _swap
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }

    _bubbleDown(i) {
        const largestChild = this.data[i * 2 + 1] &&
            this.data[i * 2 + 1].h > this.data[i * 2].h ? i * 2 + 1 : i * 2;
        if (this.data[largestChild] && this.data[largestChild].h > this.data[i].h) {
            this._swap(largestChild, i);
            this._bubbleDown(largestChild);
        }
    }

    _bubbleUp(i) {
        const parentIndex = parseInt(i / 2);
        if (this.data[parentIndex] && this.data[parentIndex].h < this.data[i].h) {
            this._swap(parentIndex, i);
            this._bubbleUp(parentIndex);
        }
    }
}

// custom comparator 0 -> start pos 1 -> end pos 2 -> height
const comp = (s1, s2) => {
    // first sort them by x position
    if (s1.x !== s2.x) {
        return s1.x - s2.x;
    }
    // start = type 1; end = type 2
    // then sort by type
    else if (s1.type !== s2.type) {
        return s1.type - s2.type;
    }
    // if it is start then sort by height
    else if (s1.type === 1) {
        return s1.h - s2.h;
    }
    // if it is end then sort by their correpsonding start
    else {
        return s1.start.h - s2.start.h;
    }
};

const getSkyline = (buildings) => {
    const pq = new PriorityQueue();
    const skylines = [];
    let res = [];

    buildings.forEach(b => {
        // node: {type, x, h, start}
        // type 1 => start node; type 2 => end node
        const start = { type: 1, x: b[0], h: b[2] };
        const end = { type: 2, x: b[1], start: start };

        skylines.push(start);
        skylines.push(end);
    });

    // key step: sort using custom comparator
    skylines.sort(comp);

    skylines.forEach(skyline => {
        if (skyline.type === 1) {
            if (skyline.h > pq.getMaxHeight()) {
                res = res.filter(r => r[0] !== skyline.x);
                res.push([skyline.x, skyline.h]);
            }

            pq.enqueue(skyline);
        } else {
            // if this is an end node then remove its mapped start
            pq.dequeue(skyline.start);

            if (skyline.start.h > pq.getMaxHeight()) {
                res.push([skyline.x, pq.getMaxHeight()]);
            }
        }
    });

    return res;
};