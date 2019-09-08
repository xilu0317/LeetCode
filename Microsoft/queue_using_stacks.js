/**
 * Initialize your data structure here.
 */
class MyQueue {
    constructor() {
        this.s1 = [];
        this.s1Copy = [];
        this.s2 = [];
        this.s2Copy = [];
    }
    /**
     * Push element x to the back of queue.
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.s1.push(x);
        this.s2.length = 0;
        this.s1Copy = Object.assign([], this.s1);
        while (this.s1Copy.length > 0) {
            this.s2.push(this.s1Copy.pop());
        }
    }
    /**
     * Removes the element from in front of queue and returns that element.
     * @return {number}
     */
    pop() {
        let result = this.s2.pop();
        this.s1.length = 0;
        this.s2Copy = Object.assign([], this.s2);
        while (this.s2Copy.length > 0) {
            this.s1.push(this.s2Copy.pop());
        }
        return result;
    }
    /**
     * Get the front element.
     * @return {number}
     */
    peek() {
        return this.s1[0];
    }
    /**
     * Returns whether the queue is empty.
     * @return {boolean}
     */
    empty() {
        return this.s1.length === 0;
    }
}
