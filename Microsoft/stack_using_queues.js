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

        for (let i = 0; i < len - 1; i++) {
            this.q2.push(this.q1.shift());
        }

        let result = this.q1.shift();

        // ES6
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
