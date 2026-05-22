/* AND ,OR ,NOT  */

// OR operator when used return the first truthy value or the last value if no truth value found in expression.

console.log("undefined"||true||false);// "undefined"
console.log(undefined||true||false);// true

// Short Circut Expression
undefined||console.log("this is okay")// console the log

//AND operator returns the first falsy value or last value  
console.log(undefined || 2 && 3 || 4); // 3
let sum = 34;
sum > 35 && console.log(`Sum is less than 35`); 


