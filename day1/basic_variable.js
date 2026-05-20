"use strict";
console.log('hello world');
/* Almost Every Language start with the storage of Data in named memory so called variables */
//Using let to create a variable
let message;
message="Hello world";
console.log(message);
// Using multiple Variable declaration with definition
let str= "abc",str2="def";
if(str > str2)
    console.log(`Str is greater`);
else
    console.log(`Str2 is greater`);

//Only _, $ , numeric and alphabets are allowed in variable naming , name must not be start with numeric 
// Reserve keyword are forbid to use in varible naming 
// let return=54; Error Reserved word return
//Case Sensitive
let s1="APP",s2="app";
// Use Const only when we are sure that value of this varible is not going to change in future
const result = (s1===s2) ? "Same":"Not Same";
console.log(`Strings are : ${result}`);
// Re definition of variable
s2 = "This is an apple";
console.log(s2);
// Copy the variables ( Primitive Data Types are not reference on assignment)
let s2Copy = s2;
console.log(`Copy of S2 : ${s2Copy}`);
s2="hay";
console.log(`Copy of S2 after change : ${s2Copy}`);

/*
    Using UpperCase for cosnt variables.
    1). When Value of a variable is preCalculated use the Uppercase to name a const variable
    const DOB='03-02-2993';
    2). When Value of a variable is going to be calculated on runtime then we can use normal naming convention of const naming.
    const time = Date().now;
*/
const timeNow = Date.now(); //now() is a static method of Date class to get the epoch
console.log(timeNow);