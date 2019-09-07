class Student {
	// static variable
	static count = 0;

	constructor(name, age, gpa) {
		// instance variables
		this.name = name;
		this.age = age;
		this.gpa = gpa;

		Student.count++;
	}

	// instance methods
	myNameIs() {
		console.log('Name = ',this.name);
	}

	myAgeIs() {
		console.log('Age = ', this.age);
	}

	// static methods
	static showTotalNumberOfStudents() {
		console.log('The total number of students is ', Student.count);
	}
}

// create a bunch of objects
let s1 = new Student('john1', 1, 1.0);
let s2 = new Student('john2', 2, 2.0);
let s3 = new Student('john3', 3, 3.0);
let s4 = new Student('john4', 4, 4.0);
let s5 = new Student('john5', 5, 5.0);

// class method
Student.showTotalNumberOfStudents();

// name
s1.myNameIs();
s2.myNameIs();
s3.myNameIs();
s4.myNameIs();
s5.myNameIs();

// age
s1.myAgeIs();
s2.myAgeIs();
s3.myAgeIs();
s4.myAgeIs();
s5.myAgeIs();
