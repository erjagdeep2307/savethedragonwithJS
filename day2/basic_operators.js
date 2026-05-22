/* Here i m going to illustrate the uses of basic operators in JS with some specific rules to remeber */
// As we know that there are operator which works on single operand , two operands or three operands. Based on this count there are operators Unary(Single),Binary(Two operand) and Ternary(Three Operand)
/* + (string concatenation) with String , It convert the other operand to string if one of them is string */
console.log(`One string and number`,("123"+2)); // Output 1232
console.log(`One string and number`,(123+"123"+2)); // Output 1231232
console.log(`One string and number`,(123 + 2 + "456")); // Output 125456 (here first two are number so they calculate LTR)
console.log(`One string and number`,("123" + 2 + 456)); // Output 1232456 (because of LTR execution)
console.log(`One string and number`,("123" + 2 * 50)); // Output 123100 (because of LTR execution)

/* unary + if applied to any number do nothing , but if it applied to any non number operand , it convert that into number , works same as Number() */
let yAxis = -343;
let un = undefined,str="true",str2="";
let isT = true;

console.log(`Applied to a Number:`,+yAxis);
console.log(`Applied to a boolean:`,+isT);
console.log(`Applied to a string:`,+"");
console.log(`Applied to a undefined:`,+un);
console.log(`Applied to a null:`,+null);

/* ShortHands for mathematical operators 
    +=,-=,*=,/=,**= etc.
*/

/* Bitwise Operators it works with binary representation of a number into 32 bit.
AND &
OR  |
XOR ^
NOT ~
LEFT SHIFT << 
RIGHT SHIFT >>
ZERO-FILL RIGHT SHIFT >>>
 */
let a=5; // 000000000000101
let b=10; //000000000001010 
console.log(`Bit wise AND`,a&b); //000000000000000000
console.log(`Bit wise OR`,a|b); //000000000000001111  15


/* Below is Imaging Excercise for Operators

"" + 1 + 0 //10
"" - 1 + 0 // -1
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
*/