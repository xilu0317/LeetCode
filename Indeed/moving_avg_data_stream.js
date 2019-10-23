class MovingAverage {
    constructor(size) {
        this.sum = 0;
        this.size = size;
        this.q = [];
    }

    movingAverage(size) {
        this.size = size;
    }

    next(val) {
        this.sum += val;
        this.q.push(val);

        if (this.q.length <= this.size) {
            return this.sum / this.q.length;
        }

        this.sum -= this.q.shift();

        return this.sum / this.q.length;
    }
}
