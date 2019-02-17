
function Student(name) {
  this.name = name;
  
  this.age = 12;
}

// static variable
Student.gender = 'M';

// Adding a member variable
Student.prototype.gpa = 4.0;


// Instantiation
var s1 = new Student('Alex');
var s2 = new Student('Bob');
var s3 = new Student('Charlie');

// Print out objects
console.log(s1);
console.log(s2);
console.log(s3);

// Static variable
console.log(Student.gender); // M  
console.log(s2.gender); // undefined

// Instance variable
console.log(`S1 GPA = ${s1.gpa}`);
s2.gpa = 2.5;
console.log(`S2 GPA = ${s2.gpa}`);

// Test if new objects created are equal
console.log(s1 == s2);
console.log(s1 === s2);