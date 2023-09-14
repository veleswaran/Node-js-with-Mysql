// // Named function
// function add(a, b,Person) {
//   Person("veleswaran");
//     return a + b;
//   }
//   console.log("named function"+add(5,60));
//   //methode
// var object = {
//     name: "John",
//     greet: function() {
//       console.log("i am method"+"Hello, " + this.name + "!");
//     }
//   };
//   object.greet();
//   //anonymouse function
//   var multiply = function(a, b) {
//     return a * b;
//   };
//   console.log("anonymouse"+multiply(4,9));
//   //Arrow function
//   var divide = (a, b) => {
//     return a / b;
//   };
//   console.log("arrow"+divide(100,9));
//   //Constr
  // function Person(name) {
  //   this.name = name;
  //   console.log(this.name);
  // }
//   var person = new Person("John");
//generator function
  function* generateSequence() {
    yield 'r';
    yield 1;
    yield 2;
    yield 3;
  }
  var sequence = generateSequence();
  console.log(sequence.next().value); // Output: 1
  console.log(sequence.next().value); // Output: 2
  console.log(sequence.next().value); // Output: 3
  