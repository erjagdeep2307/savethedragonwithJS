/* An object is a type which is used to store the key value pair, it can hold simple to complex data */
// An empty Object can be created using two ways 
const obj = {}; // Object literal
const obj1 = new Object();
console.log(`Type of obj is: ${typeof obj} and obj1 is: ${typeof obj1} `)
// Create an Object an access and delete the props
const other = "blod group";
const employee = {
    id:123242,
    name:"John",
    "last name":"Baithel", // multiword property need to be quoted
}
console.log(`Name of Employee is :${employee.name} ${employee['last name']}`);
// Delete a property of an Object

delete employee['last name'];

// Using computed property 
employee[other] = "AB+";
const keys = Object.keys(employee);
for(let i=0;i<keys.length;i++)
{
    console.log(`${keys[i]} : ${employee[keys[i]]}`);
}

//Property name shrothand, we can use 
let name='Jagdeep',state="Punjab";
const testObject={
    name,
    state
    // age
}
console.log(testObject); // { name: 'Jagdeep', state: 'Punjab' }

// in operator to check the property of an object
console.log("age" in testObject) ;// return false because key age does'nt exist in testObject
console.log("state" in testObject) ;// true

// for..in loop
for(let key in testObject)
{
    console.log(`Key is ${key} and value is: ${testObject[key]}`);
}
// Numeric keys got automatically sorted by for..in
const coutries = {
    "3":"Aus",
    "5":"Itl",
    "1":"Ind",
    "7":"Eng"
}
for(let key in coutries){
    console.log(`Country at place: ${key} is ${coutries[key]}`);
}