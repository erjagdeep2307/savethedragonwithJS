/* Objects are stored and copied by reference while the primitives are stored by value 
    A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
*/
const employee ={  // We have made the object const 
    id:10023,
    name:"Jacob"
}
//employee = {} // Throw an Error but the properties of this object is still free to use
const employeeCopy = employee;  // Here reference of employee object is being passed to the employeeCopy
employeeCopy.name = "Baithol";
console.log(employee); // will print {id:10023,name:'Baithol'}

//Cloaning Objects
//1. using Loop over the object
const newObj={};
for(let k in employee){
    newObj[k] = employee[k];
}
console.log(`After cloanig using loop`);
employee.department ="IT";
console.log(employee); // Now they are both different reference
console.log(newObj);

//2. Using assign()
// For copy , in this case source properties are copied to the destinition , if property exist it will overridden.
 Object.assign(newObj,employee);
 console.log(`After copy the employee into newOBj`);
 console.log(newObj); 
// Create a totally new clone
 const newEMP = Object.assign({},newObj);
console.log(`After Cloanig, new object is :${JSON.stringify(newEMP)}`);

// If some how base object have a property which is pointing to an object then assign will fail because it only works with primitive value properities. So for deep cloning we need structuredCloan
const orbitBus = {
    id:123,
    color:"off white",
    model:{
        built:"mercedes",
        year:2003
    }
}
console.log(`Orbit before change: ${JSON.stringify(orbitBus)}`)
const ctuBus = Object.assign({},orbitBus);
console.log(`CTU before change: ${JSON.stringify(ctuBus)}`)
ctuBus.model.built="TATA";
console.log(`Orbit After change: ${JSON.stringify(orbitBus)}`)
console.log(`CTU After change: ${JSON.stringify(ctuBus)}`)

/* Here we got the problem
Output:
After Cloanig, new object is :{"id":10023,"name":"Baithol","department":"IT"}
Orbit before change: {"id":123,"color":"off white","model":{"built":"mercedes","year":2003}}
CTU before change: {"id":123,"color":"off white","model":{"built":"mercedes","year":2003}}
Orbit After change: {"id":123,"color":"off white","model":{"built":"TATA","year":2003}}
CTU After change: {"id":123,"color":"off white","model":{"built":"TATA","year":2003}}*/

// using structuredClone
const coronaBus = structuredClone(orbitBus);
console.log(`Corona Bus After clone no change: ${JSON.stringify(coronaBus)}`);
console.log(`Orbit Bus After clone no change: ${JSON.stringify(orbitBus)}`);
// Change coronaBus to Layland built
coronaBus.model.built="Ashoka Layland";
console.log(`Corona Bus After clone change Apply: ${JSON.stringify(coronaBus)}`);
console.log(`Orbit Bus After clone change: ${JSON.stringify(orbitBus)}`);
/** here we resolved the issue
 * Output:
    Corona Bus After clone no change: {"id":123,"color":"off white","model":{"built":"TATA","year":2003}}
    Orbit Bus After clone no change: {"id":123,"color":"off white","model":{"built":"TATA","year":2003}}
    Corona Bus After clone change Apply: {"id":123,"color":"off white","model":{"built":"Ashoka Layland","year":2003}}
    Orbit Bus After clone change: {"id":123,"color":"off white","model":{"built":"TATA","year":2003}}
 */

/*StructuredClone() can handle all the primitives and object , array and circular references very well
    Object.assign() is shallow Copy but structuredClone() is deep copy or deep cloning
*/