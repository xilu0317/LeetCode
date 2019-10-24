class HitCounter {
    constructor() {
        this.q = [];
    }

    hit(t) {
        this.q.push(t);
    }

    getHits(t) {
        while (this.q.length && t - q[0] >= 300) {
            this.q.shift();
        }

        return this.q.length;
    }
}
