/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.s1 = [];
    this.s2 = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
    let min = this.s2[this.s2.length - 1];
    // Using "!min" here is potentially dangerous
    // For example, min = 0 where 0 being the current min. `!min` would then return true
    // The real intention here is that when min is not defined, then initialize it using max integer
    if (min === undefined) { // Also it is easier to read when u r not doing the `!min` thing
        min = Number.MAX_SAFE_INTEGER; // Forget initialization is a sin!
    }

    this.s1.push(x);
    if (x <= min) {
        this.s2.push(x);
    }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
    if ((this.s1.length > 0 || this.s2.length > 0) && this.s1[this.s1.length - 1] === this.s2[this.s2.length - 1]) {
        this.s2.pop();
    }
    this.s1.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
    return this.s1[this.s1.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
    return this.s2[this.s2.length - 1];
};
