/** NULLISH COALESCING ??
 *  It returns the first defined value or if a value is not null or undefined it returns that value or the last value will be returned.
 */
let a= null;
let b= 234324;
console.log(`Nullish Result:`, a ?? b); // Output 234324
/* null coalescing vs || 
    while both seems to works same but in case of || it only returns the first truthy value , it does'nt disgunish between 0,false and empty string.

    while ?? return only defined value.
*/
let height=0;
console.log(`Height value is :`,height || 'not defined'); // not defined because height is false value
console.log(`Height value using ??`,height ?? 'not defined');//0
/* Because precedence of ?? is lower than other operators , so it is best to use paranathesis with expression */
console.log(`Using with other operatores:`,(height < 6)??"not satisfied")