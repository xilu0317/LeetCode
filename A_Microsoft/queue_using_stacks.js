class MyQueue {
    constructor() {
        this.s1 = []
        this.s1Copy = []
        this.s2 = []
        this.s2Copy = []
    }

    push(x) {
        this.s1.push(x)
        this.s2.length = 0
        this.s1Copy = Object.assign([], this.s1)

        while (this.s1Copy.length > 0) {
            this.s2.push(this.s1Copy.pop())
        }
    }

    pop() {
        let result = this.s2.pop()

        this.s1.length = 0
        this.s2Copy = Object.assign([], this.s2)

        while (this.s2Copy.length > 0) {
            this.s1.push(this.s2Copy.pop())
        }

        return result
    }

    peek() {
        return this.s1[0]
    }

    empty() {
        return this.s1.length === 0
    }
}
