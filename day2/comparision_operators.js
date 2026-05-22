/* Here we are going to use the comparision operators with different type of data and will check how these operators works. */
// Comparision Operators result with the boolean value.
console.log(`String Comparision: `, "G" > "A"); // true because it uses lexicographical or ASCII value to compare the string
console.log(`String Comparision: `, "Ganga" < "Arya"); // false

/* Here is a beautiful thing about operators */
console.log(`null with 0`,null==0); // false Because == doesnt perform conversion to null or undefined
/* Null with Comparision */
console.log(`null greater 0`,null > 0);//false
console.log(`null lesser 0`,null < 0); //false
console.log(`null greater or equal`,null >= 0); //true
console.log(`null less or equal`,null <= 0); //true

/* Undefined with comparision  */
console.log(`undefined with 0`,undefined==0); //false
console.log(`undefined greater 0`,undefined > 0); // false
console.log(`undefined lesser 0`,undefined < 0); // false
console.log(`undefined greater or equal 0`,undefined >= 0); // beacuse NaN 