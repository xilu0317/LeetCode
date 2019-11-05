// Immediately invoked function expression

let test = (function (args) {
    function Car(args) {
        this.name = args.name
        this.make = args.make
        this.year = args.year
    }

    Car.prototype.start = function () {
        console.log(`start ${this.name}`)
    }

    Car.prototype.stop = function () {
        console.log(`stop ${this.name}`)
    }

    Car.prototype.getInfo = function () {
        console.log(`${this.name} is driving ...`)
    }

    Car.prototype.resetName = function (name) {
        this.name = name
    }

    return Car
})()

let args = { name: 'my1', year: 1234, make: 'toyota' }

test(args)


console.log(test)

test.start()