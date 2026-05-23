/* In this file we are going to use the arrow functions 
    Arrow functions are another intersting way to create functions.
*/

// If function need a single argument on call and calculate the value and return it can be written in single line. In case of multiple input parameters we need the paranthesis over there.

const isPositiveNumber = num => (typeof num === 'number') && (num > 0);
console.log(isPositiveNumber(0));

// if function need complex calculation it can be used with block {}
const isPalindrom = (input) => {
    let tmpStr = (typeof input) === 'string'? input : input.toString();
    let reversed =tmpStr.split("").reverse().join(""); 
    console.log(`Type of ${typeof tmpStr} ${typeof reversed}`);
    if(tmpStr === reversed)
    {
        return true
    }
    else 
        return false;
}
let str = "tat";
console.log(`${str} is ${isPalindrom(str)?"":"not"} a palindrom`);