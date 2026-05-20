/* Type Conversion is the process of convert data of one type to another type based on requirement. 
    it can be automatic (implicit) and manual (Explicit).
*/

/* String Conversion (Explicit)*/
let isOpen = true;
console.log(`Type of isOpen before conversion:`,typeof isOpen);
isOpen = String(isOpen);
console.log(`Type of isOpen After conversion:`,typeof isOpen);

/* Number Conversion */
// Numbers (In Math functions and mathematical Expressions values is automatically being converted to Numbers)
const price = "20000";
console.log(`Type of Price`,typeof price);
let avg = price/5; // Implicit Type Conversion took place automatically
console.log(`Now avg is ${avg} and type of avg :${typeof avg}`);
// For Manual Conversion to the numbers we need to use Number(value);
let id = "100482";
console.log(`Type of Id:`,typeof id);
id =  Number(id);
console.log(`Type of Id:`,typeof id);
// Here are some key  points to remeber
console.log(`undefined to number :`,Number(undefined)); // output NaN
console.log(`null to number :`,Number(null)); // output 0
console.log(`string to number :`,Number(" 232   ")); // spaces or \t \n will be removed and rest is interpretted
console.log(`String with number: `,Number("38432648326482n"));//NaN
console.log(`string with number error to number :`,Number(" abd 1232 ")); //NaN because it needs the data to be compatible
// Empty string is alway become zero

/* Boolean Type */
console.log(`An Empty Array`,Boolean([])); //true
//Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false
console.log(`An Empty String:`,Boolean(""));// false
console.log(`Zero :`,Boolean(0)); // false
console.log(`undefined :`,Boolean(undefined)); // false
console.log(`NaN :`,Boolean(NaN)); // false
console.log(`Spaces String(is not empty):`,Boolean("  ")); // True

