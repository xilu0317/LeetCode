class Student {
    // static variable
    static count = 0

    constructor(name, age, gpa) {
        // instance variables
        this.name = name
        this.age = age
        this.gpa = gpa

        Student.count++
    }

    // instance methods
    getName() {
        console.log('Name = ', this.name)
    }

    getAge() {
        console.log('Age = ', this.age)
    }

    // static methods
    static showTotalNumberOfStudents() {
        console.log('The total number of students is ', Student.count)
    }
}

let s1 = new Student('Alex', 17, 3.12)
let s2 = new Student('Bob', 22, 2.57)
let s3 = new Student('Craft', 43, 4.00)

// class method
Student.showTotalNumberOfStudents()

// name
s1.getName()
s2.getName()
s3.getName()

// age
s1.getAge()
s2.getAge()
s3.getAge()
