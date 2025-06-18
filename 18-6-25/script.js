//Hoisting with Var keyword

// function func1() {
//   console.log(a);
//   var a = 2; //local scope
// }

// func1(); //global scope

// /*
// function func1(){
// var a; //undefined
// console.log(a);
// a = 2;

// }

// func1();
// */

// // Hoisting with Let keyword

// function func1() {
//   console.log(a);
//   let a = 10;
// }

// func1();

// /*
// function func1(){
//   let a;
//   console.log(a);
//   a = 10;
// }

// func1();
// */

// Closures

// function func1() {
//   let a = 10;
//   console.log(a);

//   function func2() {
//     console.log(a);
//   }

//   func2();
// }

// func1();

/*
function func1(){
  let a;
  console.log(a);
  a = 10;
}

func1();
*/

//NOTE - Data type in Javascript
//Primitive
// var a = 5;
// var b = a;
// console.log("a = ", a);
// console.log("b = ", b);

// a = 10;
// console.log("updated a = ", a);
// console.log("b = ", b);

//Reference

// let obj1 = {
//   a: 1,
//   b: 2
// };

// let obj2 = obj1;

// console.log("obj1 = ", obj1);
// console.log("obj2 = ", obj2);

// obj1.a = 3;
// obj1.b = 5;
// console.log("updated obj1 = ", obj1);
// console.log("obj2 = ", obj2);

//NOTE - Objects

// let student = {
//   name: "Alice",
//   college: "LPU",
//   regId: 1234
// };

// //Access:
// console.log(student.name);

// //Update:
// student.regId = 1256;

// //NOTE - Arrays

// let marks = [25, 28, 26, 30, "LPU"];

// //Access:
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);
// console.log(marks[6]);

// //update

// marks[0] = 21;

// console.log(marks);

// const students = new Array({ name: "alice" }, { name: "bob" });

// console.log("a: ", students);

// students.push({ name: "rohit" });

// console.log("b: ", students);

// students.pop();

// console.log("pop: ", students);

// console.log("size: ", students.length);


// //NOTE - LOOPS

// for (let i = 0; i < students.length; i++) {
//   console.log("Student Name: ", students[i].name);
// }

// //While Loop

// let j = 0; //initialization
// //condition
// while (i < students.length) {
//   console.log("Student Name: ", students[i].name);

//   j++; //updation
// }

// //Do-While Loop

// //initialization
// let k = 0;

// do {
//   //statement
//   console.log("Student Name: ", students[k].name);

//   k++; //updation
// } while (k < students.length); //condition


//  THERE ARE THREE TYPES OF FUNCTION :-
// 1 named function
// 2 arrow function
// 3 annonymous function

// function print() { // named
//   console.log("LPU");
// }

// const print = () => { // arrow
//   console.log("LPU");
// }

// const print = function () { // annonymous
//   console.log("LPU");
// }

// print();




//NOTE - Operators:

/*
1. Arithematic Operator

+, -, *, /, //, %

2. Comparision Operator

>, <, ==, ===, !=

3. Assignment Operator
=, +=, -=, *=, /=

4. Ternary Operator

expression ? statement: statement

5. Logical Operator
&&, ||, !, ?? 

6. Bitwise Operator

&, |, ^

7. typeof Operator

typeof

*/

let a = 3;
let b = "3";

console.log(a == b);
console.log(a === b);

console.log((a += 3)); //a = a+3

console.log(a > 3 ? "Hello" : "Hi");

a = null;

console.log(a ?? "hello");

console.log(typeof b);