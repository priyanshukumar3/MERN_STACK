//NOTE - Function Declaration or Statement
// getName();
// console.log(greetStudents);
// greetStudents();

// function getName() {
//   console.log("Hello LPU");
// }

//Function Expression

// var greetStudents = function () {
//   console.log("Hello students");
// };

// console.log(greetStudents);

//NOTE -  Annonymous function

//NOTE - Named function Expression
// var greetStudents = function getName() {
//   console.log("Hello students");
// };

// console.log(greetStudents);
//NOTE - Parameters vs Arguments

// //Parameters
// function greet(param1) {
//   console.log(`Hello ${param1}`);
// }

// //Arguments
// greet("Abhishek");

//NOTE -  Arrow Function vs Traditional Function

//SECTION - No Hoisting in Arrow Function as the function expression is stored in a variable.

// greetLPU()
// greetStudents() //TypeError

// var greetLPU = () => {
//   console.log(`Hello LPU`);
// };

// function greetStudents() {
//   console.log(`Hello Students`);
// }

//SECTION - Arguments
// var greetLPU = () => {
//   console.log(`Hello LPU`, arguments);
// };

//ANCHOR - Rest operator
//  -
// var greetLPU = (...args) => {
//   console.log({ args }); //Returns Array
//   console.log(`Hello LPU`, args);
// };

// function greetStudents(arguments) {
//   console.log(`Hello Students`, arguments);
// }

// greetStudents(1, 2, 3);
// greetLPU(1, 2, 3); //Reference Error

//NOTE - This Keyword

// const obj = {
//   name: "LPU",

//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   }
// };

// obj.greet();

// const obj2 = {
//   name2: "Students",

//   greet: () => {
//     console.log(`Hello ${this.name2}`);
//   }
// };

// obj2.greet();

//NOTE  -First Class Function || First Citizen Function

// function greet() {
//   return () => {
//     console.log("Hello");
//   };
// }

// greet();

// function x(param) {
//   param();
// }

// function y() {
//   console.log("hello");
// }

// x(y);


//NOTE - Execution Context :-
// console.log("hello"); // s1
// console.log("LPU"); // s2
// function greet() {
//     console.log("Hello Students");
// }
// greet(); // s3


// call Stack Behavior :- firstly call stack will get creted and then GEC get created and then after that s1 will go in call stack then it will get excuted after call stack will ask from console then s1 will get deleted from call stack then s2 will go in call stack then it will get excuted then same and after that FEC get created for func then greet will go in call stack then it will get excuted.

/* 1. Call stack is being created
   2. Global Execution Context (GEC) is created.
   3. Go to line 114 for compilation, the statement is pushed into the call stack.
   4. Since console is not a js command, it connects with webAPI to print "hello" in console in dev tools and pops from call stack.
   5. Same with the line 115
   6. Go to line 119 for compilation.
   7. Since function has local scope, Function Execution context (FEC) is created and pushed to call stack.
   8. Then step 3 to 4 is repeated with line 117.
   9. FEC gets popped.
   10. GEC gets popped.
*/


// NOTE - SetTimeout

// console.log("Hello Munit!");

// setTimeout(function () {
//     console.log("Hello Lpu");
// }, 3000);

// console.log("Hello Sriram");


// for(let i=1; i<=5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i* 1000);
// }



// ----------------------------------------24 - 06 - 25----------------------------------------------



//NOTE - Callbacks

//Defination: A callback is a function which is passed as an argument inside a function.

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function greetStudent(name, callback) {
//   setTimeout(() => {
//     callback(name);
//   }, 1000);
// }

// greetStudent("Sriram", greet);

//Grocery Cart

// function createOrder(cb) {
//   console.log("order creation");
//   cb();
// }

// function payOrder(cb) {
//   console.log("Payment Done..");
//   cb();
// }

// function createOrderSummary() {
//   console.log("Created Order Summary");
// }

// createOrder(() => payOrder(createOrderSummary));

// Bad side of callback

/*
1. Callback Hell
2. Inversion of control
*/


//Bad side of callback

/*
 1. Callback Hell
 2. Inversion of control
*/

//NOTE - Callback Hell

/*
1. User Login
2. Add items in cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet
*/

// function login(cb) {
//   console.log("User Logged in");
//   cb();
// }

// function addItemToCart(cb) {
//   console.log("Added items to cart");
//   cb();
// }

// function createOrder(cb) {
//   console.log("order creation");
//   cb();
// }

// function payOrder(cb) {
//   console.log("Payment Done..");
//   cb();
// }

// function createOrderSummary(cb) {
//   console.log("Created Order Summary");
//   cb();
// }

// function updateWallet() {
//   console.log("Update wallet");
// }

// login(() => addItemToCart(() => createOrder(() => payOrder(() => createOrderSummary(updateWallet)))));




// NODE - Promises

// Defination
// Promise is an object which shows eventual completion or failure of an asynchronous code
// Promise is an placeholder which stores completion or failure state of a asynchronous call

// function createOrder() {
//     console.log("Order created successfully");
// }

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         createOrder();
//         resolve();
//     }, 2000)
// });

// console.log(promise);


//LINK - Callback hell via promise

/*
1. User Login
2. Add items to cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet

*/

const login = () =>
  new Promise((res, rej) => {
    console.log("User Logged in");
    res({name: "sriram"});
  });

const addItemToCart = () =>
  new Promise((res, rej) => {
    console.log("Added items to cart");
    res();
  });

const createOrder = () =>
  new Promise((res, rej) => {
    console.log("Order creation");
    res();
  });

const payOrder = () =>
  new Promise((res, rej) => {
    console.log("Payment Done..");
    res();
  });
const createOrderSummary = () =>
  new Promise((res, rej) => {
    console.log("Created Order Summary");
    res();
  });

function updateWallet() {
  console.log("Update wallet");
}

//  with the help of this we can resolve the callback HELL

login()
  .then((data) => {
    console.log(data);
    addItemToCart()
      .then(() => {
        createOrder()
          .then(() => {
            payOrder()
              .then(() => {
                createOrderSummary()
                  .then(() => {
                    updateWallet();
                  })
                  .catch(() => console.error("Order summary failed!"));
              })
              .catch(() => console.error("Payment failed!"));
          })
          .catch(() => console.error("Create order failed!"));
      })
      .catch(() => console.error("Cart Items add failed!"));
  })
  .catch(() => console.error("user Login failed!"));

