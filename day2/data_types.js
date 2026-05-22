
/* Javascript have numbers range ±((2**53) -1) */
// It also have 
console.log((2**53)-1); // That quite a big number but if we need more than this we can use BigInt
const bigIntNumber = 9007199254740992n; // need to postfix a n to represent the BigInt Numbers
console.log(bigIntNumber + 3n);

/*
    ---------------String---------------------
    JS use three types of Quotes for string
    single quote ''
    double quote ''
    apstrophes `` 
*/
const appleRate = 10;
console.log(`Rate of Apple is :${appleRate}`);
const empId = "100482"; // this is same as '100482'

console.log(`Length of Employee Id: ${empId.length}`);
// After changes in primitive type property
empId.length = 4;
console.log(`Length of Employee Id After Changes in length Property: ${empId.length}`);// Will print 6 because primitive data types doesnot allow the changes in properties of an entity
/* boolean */

/*
 null value is specail value that is not of any type . it is a unique type used to represent the empty unknown or nothing entity 
undefined is also a unique type that is used to represent the entity which has been declared but value is not defined for it.

 */
let someValue;
console.log(`Some value is :${someValue}`); //undefined

/* Objects and Symbols 
    An object is a specail type used to store complex data of various types.
    {
        id:321421, //number
        name:"jason" //string
    }
    An object is a refrence type in js means it holds the reference to the values stored 
*/
const obj = {
    id:1232,
    name:"This is json"
}
const objCopy = obj;
console.log(`Before Change Object:${Object.entries(obj)}`);
objCopy.id = 23468324;
console.log(`After changes in Object Copy: ${Object.entries(obj)}`);// It will going to print the changed Id