/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.s1 = [];
    this.s1Copy = [];
    this.s2 = [];
    this.s2Copy = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x);
    this.s2.length = 0;

    this.s1Copy = Object.assign([], this.s1);
    while (this.s1Copy.length > 0) {
        this.s2.push(this.s1Copy.pop());
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let result = this.s2.pop();

    this.s1.length = 0;
    this.s2Copy = Object.assign([], this.s2);
    while (this.s2Copy.length > 0) {
        this.s1.push(this.s2Copy.pop())
    }

    return result;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.s1[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length === 0;
};
