console.log("Starting my first Node JS Application.")

// var calc = require("./calculator.js"); // use calculator as a module, similar to a class in C# days.
// console.log(calc.add(2,3));

var myPerson = require("./person.js"); // use the person module

console.log(myPerson.getName());
console.log(myPerson.getAge());

myPerson.setName("Henry");
myPerson.setAge(42);

console.log(myPerson.getName());
console.log(myPerson.getAge());

console.log("--- CourseController ----"); 

var courseController = require("./courseController.js"); // use the course controller module

console.log("There are "+courseController.length()+" courses in the course data model.");

console.log("Adding C75...");
var c75 = {name:"Infocomm & Media Engineering",code:"C75"}
courseController.addCourseObj(c75);

console.log("There are "+courseController.length()+" courses in the course data model.");

console.log("Adding C41...");
var newCourse = { name:"Engineering with Business", code:"C41" };
courseController.addCourse(newCourse.name,newCourse.code);

console.log("There are "+courseController.length()+" courses in the course data model.");

console.log("Adding C52...");
courseController.addCourse("Aerospace Systems & Management","C52");

console.log("There are "+courseController.length()+" courses in the course data model.");


var index;
for (index=0;index<courseController.length();index++) {
    console.log("Position "+index+" is "+JSON.stringify(courseController.getCourseAt(index)));
    console.log("Name is "+courseController.getCourseAt(index).name);
    console.log("Code is "+courseController.getCourseAt(index).code);
}



