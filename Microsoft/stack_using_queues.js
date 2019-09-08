/**
 * Initialize your data structure here.
 */
class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }
    /**
     * Push element x onto stack.
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q1.push(x);
    }
    /**
     * Removes the element on top of the stack and returns that element.
     * @return {number}
     */
    pop() {
        let len = this.q1.length;
        for (let i = 0; i < len - 1; i++) {
            this.q2.push(this.q1.shift());
        }
        let result = this.q1.shift();
        [this.q1, this.q2] = [this.q2, this.q1];
        return result;
    }
    /**
     * Get the top element.
     * @return {number}
     */
    top() {
        return this.q1[this.q1.length - 1];
    }
    /**
     * Returns whether the stack is empty.
     * @return {boolean}
     */
    empty() {
        return this.q1.length === 0;
    }
}
