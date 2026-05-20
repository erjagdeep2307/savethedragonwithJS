/* Javascript is a dynamically type language means there exists data types but value is not bound to any specific type */

let empCode = "100482"; //At initial Declare and defined with string value.
console.log(typeof empCode);
empCode=100482; // Here redefined with a Numeric type value and there is no Error because of dynamically Type behaviour of the language.
console.log(typeof empCode);
// Javascript have 8 Primitive data Types

//--------------- Number -------------------
/*Number Type , A number type data type contains the every integer and floating number with some specail values. For Eg. Infinity , NaN  */
// Infinite is a number that is greater than every Number exists
console.log(`Type of Infinity is : ${typeof Infinity}`);
// NaN (Not a number is result of mathematical operation error. Such as "App"/2 diving a string value by a number. Every operation to a NaN is going to produce a NaN . Except the one Expression that is every number if powered to 0 is 1)
const resultOfNanCalcus = NaN ** 0;
const powerZeroResult = 2**0;
console.log(`2 After power to 0 : ${powerZeroResult}`);
console.log(`Type of NaN is : ${typeof NaN} and value of ${resultOfNanCalcus}`);

/* 19th May 2026 
    A most intersting things about Number i found are below.
*/
const result = (NaN === NaN);//false why because every NaN represents a unique Identity
console.log(`Is a NaN is equal to NaN : ${result}`);
const zeroEqlCheckRes = (0 === -0);//true
console.log(`Is a 0 is equal to -0 : ${zeroEqlCheckRes}`);
// Modern Approach Used to Check this is Object.is() which checks the expression based on Value
if(Object.is(NaN,NaN)) // True
{
    console.log(`They are Same`)
}
else{
    console.log(`They are not Same`)
}


