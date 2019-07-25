/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    var len = this.q1.length;
    for (let i = 0; i < len - 1; i++) {
        this.q2.push(this.q1.shift());
    }

    var result = this.q1.shift();
    [this.q1, this.q2] = [this.q2, this.q1];

    return result;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.q1[this.q1.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0;
};
