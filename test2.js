var window ={a:1, b:2};

(function student(args) {
  debugger;
  console.log(args);

  var name = "xilu";
  var description;
  var id;
  var age;
  var meta;

  student.prototype.work = function() {
    console.log("student is working");
  };
  student.prototype.play = function() {};

  student.prototype.workHard = function() {};

  student.prototype.doStuff = function() {};
  student.prototype.takeTest = function() {};

  return this;
})(window);
