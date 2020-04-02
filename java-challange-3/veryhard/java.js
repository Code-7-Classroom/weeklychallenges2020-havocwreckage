function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    // this.exercise =function exercise(value) {
    // return function() {
    //     return "Today exercise: " + value;
    // }
}


var myFather = new Person("John", "Teacher", 50);

console.log(myFather);

// function Programmer(name, job, age, languages) { 
//     this.name = name;
//     this.job = job;
//     this.age = age;
//     this.languages = languages;
// }

// exercise : function() {
//     return this.firstName + " " + this.lastName;
//   }