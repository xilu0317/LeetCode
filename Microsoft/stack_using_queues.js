class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x) {
        this.q1.push(x);
    }

    pop() {
        // lock length
        let len = this.q1.length;

        // all but last one
        for (let i = 0; i < len - 1; i++) {
            this.q2.push(this.q1.shift());
        }

        // dequeue the last one and memorize it
        let result = this.q1.shift();

        // ES6 exchange references because we still want q1 to be primary
        [this.q1, this.q2] = [this.q2, this.q1];

        return result;
    }

    top() {
        return this.q1[this.q1.length - 1];
    }

    empty() {
        return this.q1.length === 0;
    }
}
