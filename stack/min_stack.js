/**
 * initialize your data structure here.
 */
class MinStack {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    /**
    * @param {number} x
    * @return {void}
    */
    push(x) {
        let min = this.s2[this.s2.length - 1];
        // Using '!min' here is potentially dangerous
        // For example, min = 0 where 0 being the current min. '!min' would then return true
        // The real intention here is that when min is not defined, then initialize it using max integer
        if (min === undefined) { // Also it is easier to read when u r not doing the '!min' thing
            min = Infinity; // Forget initialization is a sin!
        }
        this.s1.push(x);
        if (x <= min) {
            this.s2.push(x);
        }
    }

    /**
    * @return {void}
    */
    pop() {
        if ((this.s1.length > 0 || this.s2.length > 0)
            && this.s1[this.s1.length - 1] === this.s2[this.s2.length - 1]) {
            this.s2.pop();
        }
        this.s1.pop();
    }

    /**
    * @return {number}
    */
    top() {
        return this.s1[this.s1.length - 1];
    }

    /**
    * @return {number}
    */
    getMin() {
        return this.s2[this.s2.length - 1];
    }
}





