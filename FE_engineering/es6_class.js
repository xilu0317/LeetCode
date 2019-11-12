class Student {
    // class/static variable
    static count = 0

    constructor(name, age, gpa) {
        // instance variables
        this.name = name

        // accessing class/static method
        Student.count++
    }

    // instance method
    getName() {
        console.log(`name = ${this.name}`)
    }

    // class/static method
    static showTotalNumberOfStudents() {
        console.log('The total number of students is ', Student.count)
    }
}

let s1 = new Student('Alex', 17, 3.12)
let s2 = new Student('Bob', 22, 2.57)
let s3 = new Student('Craft', 43, 4.00)

// class/static method
Student.showTotalNumberOfStudents()

// instance methods
s1.getName()
s2.getName()
s3.getName()
